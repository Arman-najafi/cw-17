import { createContext, useReducer } from "react";

export const RootContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "test":
      let temp = state;
      temp.push(action.number + action.number2);
      console.log(temp);
      return temp;
  }
};

export default function RootContextProvider({ children }) {
  const [gradeList, dispatch] = useReducer(reducer, []);

  return (
    <RootContext.Provider value={{ gradeList, dispatch }}>
      {children}
    </RootContext.Provider>
  );
}
