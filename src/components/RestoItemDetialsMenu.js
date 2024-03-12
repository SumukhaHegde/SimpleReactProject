import { CDN_Images } from "../utils/constants";

const RestoItemDetailsMenu = ({ item }) => {
  return (
    <div>
      <div className="flex h-48">
        <div className="my-4 border-b w-10/12">
          <h2 className="my-2 text-2xl">{item.card.info.name}</h2>
          <h3 className="text-sm pb-4">{item.card.info.description}</h3>
          <h4 className="text-lg mb-6">₹ {item.card.info.price / 100}</h4>
        </div>
        <div className="w-2/12 text-center h-32">
          <img
            className="w-25 rounded-2xl"
            src={CDN_Images + item.card.info.imageId}
          />
          <button className="bg-slate-400 text-white absolute left-2/3 ">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestoItemDetailsMenu;
