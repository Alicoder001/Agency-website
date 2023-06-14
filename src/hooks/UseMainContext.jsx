import { useContext } from "react";
import { mainContext } from "../context/MainContext";

const UseMainContext = () => {
  const context = useContext(mainContext);
  // if (!context) {
  //   throw new Error("context mavjud emas");
  // }
  return context;
};

export default UseMainContext;
