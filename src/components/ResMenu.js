import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/Hooks/useRestoMenu";
import RestoItemCards from "./RestoItemCards";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestoMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  const [showItem, setShowItem] = useState(false);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo.data.cards[0].card.card.info;

  const itemCategories =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  const itemCards = itemCategories.map((item) => {
    return item.card.card;
  });

  return (
    <div className="w-6/12 mx-auto m-10">
      <div className="text-center ">
        <h1 className="font-bold text-4xl text-blue-600">
          {name.toUpperCase()}
        </h1>
        <h2 className="pb-10">
          {cuisines} - {costForTwoMessage}
        </h2>
      </div>
      <div className="mx-10 px-10">
        {itemCards.map((itemCard, index) => {
          return (
            <div key={itemCard.title}>
              <RestoItemCards
                index={index}
                itemCards={itemCard.itemCards}
                title={itemCard.title}
                showIndex={showIndex}
                showItem={showItem}
                setShowIndex={(index, showItem) => {
                  setShowItem(showItem);
                  setShowIndex(index);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
