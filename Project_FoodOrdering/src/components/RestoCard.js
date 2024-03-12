import { CDN_Images } from "../utils/constants";

const RestoCard = (props) => {
  const { resData } = props;
  return (
    <div className="bg-green-50 h-96">
      <img
        src={CDN_Images + resData.info.cloudinaryImageId}
        className="w-12/12"
      />
      <h1>{resData.info.name}</h1>
      <h3>{resData.info.cuisines.join(", ")}</h3>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestoCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div>
        <label className="absolute p-10 my-auto bg-black text-white w-12/12 h-1/6">
          {resData.info.aggregatedDiscountInfoV3.header}
        </label>
        <label className="absolute  bg-black text-white">
          {resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
