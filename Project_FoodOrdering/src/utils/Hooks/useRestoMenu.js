import { useEffect, useState } from "react";
import { RESTO_API } from "../constants";

const useRestoMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(RESTO_API + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestoMenu;
