/** @format */

import { createContext, useReducer } from 'react';

const mainContext = createContext();
const contextF = (state, action) => {
  switch (action.type) {
    case 'changeMode':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};
const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextF, {
    mode: 'dark',
    checkF: (id, setData, key) => {
      setData((data) => {
        return data.map((item) => {
          if (item.id === id) {
            return { ...item, [key]: !item[key] };
          } else {
            return key === 'isActive' ? { ...item, [key]: false } : item;
          }
        });
      });
    },
  });
  const changeMode = (mode) => {
    dispatch({ type: 'changeMode', payload: mode });
  };
  // const checkF = (id, setData, key) => {
  //   setData((data) => {
  //     return data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, [key]: !item[key] };
  //       } else {
  //         return key === "isActive" ? { ...item, [key]: false } : item;
  //       }
  //     });
  //   });
  // };

  return <mainContext.Provider value={{ ...state, changeMode }}>{children}</mainContext.Provider>;
};
export { mainContext, MainContextProvider };
