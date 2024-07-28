import { createContext, useReducer } from "react";

export const RootContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "test":
      let temp2 = state.data;
      temp2 = action.payload;

      return { ...state, data: temp2 };
    case "average":
      let temp = 0;
      let average = 0;
      // let sum = action.payload.map((item) => (temp += item.score));
      average = temp / action.payload.length;
      return { ...state, average: average };
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
