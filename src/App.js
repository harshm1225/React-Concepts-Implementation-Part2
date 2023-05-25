import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";
function App() {
  let data = require("./data.json");
  let [availableJobs, setAvailableJobs] = useState(data);
  const handleButtonClick = (btn) => {
    console.log("Clicked 1");
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      btn.style.backgroundColor = "#5ca5a5";
      btn.style.color = "#fff";
      setAvailableJobs(
        availableJobs.filter(
          (job) =>
            job.languages.includes(btn.innerText) ||
            job.level === btn.innerText ||
            job.role === btn.innerText
        )
      );
    } else {
      btn.style.backgroundColor = "#EFFAFA";
      btn.style.color = "#5ca5a5";
    }
  };
  return (
    <div>
      <Header />
      <Main
        availableJobs={availableJobs}
        onCardButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
