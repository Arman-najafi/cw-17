import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Result from "./Component/result/Result";
import Summary from "./Component/summary/summary";
import { RootContext } from "./context/RootContextProvider";

function App() {
  const { dispatch } = useContext(RootContext);
  useEffect(() => {
    getSubject();
  }, []);

  async function getSubject() {
    try {
      const res = await axios.get(` http://localhost:3000/data`);
      dispatch({ type: "test", payload: res.data });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen font-inter">
      <div className="bg-white flex rounded-2xl shadow-2xl">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
