import axios from "axios";
import { useEffect } from "react";
import Result from "./Component/result/Result";
import Summary from "./Component/summary/summary";

function App() {
  useEffect(() => {
    getSubject();
  }, []);
  async function getSubject() {
    try {
      const res = await axios.get(
        `https://65afce942f26c3f2139bcafb.mockapi.io/api/v1/data`
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-[#eee]">
      <div className="relative">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
