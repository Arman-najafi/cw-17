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
    <div className="flex items-center justify-center min-h-screen bg-[#eee] font-inter">
      <div className="bg-white flex rounded-2xl shadow-lg">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
