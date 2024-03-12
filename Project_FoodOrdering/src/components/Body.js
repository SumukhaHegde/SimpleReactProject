import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

const BodySection = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const PromotedResto = withPromotedLabel(RestoCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonConvertedData = await data.json();

    setListOfResto(
      jsonConvertedData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setFilteredResto(
      jsonConvertedData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  if (onlineStatus) {
    if (listOfResto.length === 0) {
      return <Shimmer />;
    }
    return (
      <div>
        <div className="my-5 text-end">
          <input
            className="border-2 mx-10"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-2 mx-10 px-10"
            onClick={() => {
              const filteredList = listOfResto.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResto(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="border-2 mx-10"
            onClick={() => {
              let filteredList = listOfResto.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              );
              setFilteredResto(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="flex p-10">
          {filteredResto.map((restaurant) => {
            const { aggregatedDiscountInfoV3 } = restaurant.info;
            return (
              <Link
                className="p-2"
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {/* {console.log(aggregatedDiscountInfoV3)}
                {Object.keys(aggregatedDiscountInfoV3).length !== 0 ? (
                  <PromotedResto resData={restaurant} />
                ) : ( */}
                <RestoCard resData={restaurant} />
                {/* )} */}
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>No internet connection</h1>;
  }
};
export default BodySection;
