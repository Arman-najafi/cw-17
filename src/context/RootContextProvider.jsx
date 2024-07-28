import { createContext, useReducer } from "react";

export const RootContext = createContext();
let sum, average;
const reducer = (state, action) => {
  switch (action.type) {
    case "showResult":
      sum = action.payload.reduce((acc, item) => acc + item.score, 0);
      average = sum / action.payload.length;
      return { data: action.payload, average };
    // case "average":
    //   if (action.payload && action.payload.length > 0) {
    //     console.log(action.payload);
    //     let sum = action.payload.reduce((acc, item) => acc + item.score, 0);
    //     let average = sum / action.payload.length;
    //     return { data: action.payload, average };
    //   } else {
    //     return { ...state, average: 0 };
    // return { data: action.payload, average: 0 };
    //   }

    default:
      return state;
  }
};

export default function RootContextProvider({ children }) {
  const [gradeList, dispatch] = useReducer(reducer, {
    data: [],
    average: 0,
  });

  return (
    <RootContext.Provider value={{ gradeList, dispatch }}>
      {children}
    </RootContext.Provider>
  );
}
