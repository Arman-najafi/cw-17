import Summary from "./Component/subject/summary";
import Average from "./Component/average";
import { useEffect } from "react";
import axios from "axios";

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
    <div className="my-0 mx-auto min-h-screen w-2/3">
      <Summary />
      <Average />
    </div>
  );
}

export default App;
