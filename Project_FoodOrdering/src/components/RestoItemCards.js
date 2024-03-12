import { useState } from "react";
import RestoItemDetailsMenu from "./RestoItemDetialsMenu";

const RestoItemCards = ({
  index,
  itemCards,
  title,
  showIndex,
  setShowIndex,
}) => {
  const handleAccordian = () => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
    //setShowIndex = (index)=>{setShowItem(index)}
  };

  return (
    <div className="my-4 ">
      <div
        className="flex justify-between my-6 border-b-4 border-blue-300 pb-2 cursor-pointer font-bold bg-green-100 text-center pt-2 px-2"
        onClick={handleAccordian}
      >
        <div>{title.toUpperCase()}</div>
        <h1>{"🔽"}</h1>
      </div>
      {index === showIndex && (
        <div>
          {itemCards.map((item) => {
            return <RestoItemDetailsMenu key={item.card.info.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RestoItemCards;
