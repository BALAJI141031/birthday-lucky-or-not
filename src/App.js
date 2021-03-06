import { useState } from "react";
import "./styles.css";

export default function App() {
  var [date, updateDate] = useState("");
  var [luckyNumber, updateLuckyNumber] = useState("");
  var [showMsg, updateMsg] = useState("");
  var sum = 0;

  function takeDate(event) {
    let date = event.target.value;

    let updatedDate = date.replaceAll("-", "");
    updateDate(updatedDate);
  }

  function takeNumber(event) {
    var luckynum = event.target.value;

    updateLuckyNumber(luckynum);
  }

  function checkForLucky() {
    if (date === "" || luckyNumber === "") {
      updateMsg(" please give your details");
    } else {
      for (var item of date) {
        sum = sum + parseInt(item);
      }
      if (sum % luckyNumber == 0) {
        updateMsg("yes you are lucky");
      } else {
        updateMsg("you are not lucky");
      }
    }
  }

  return (
    <div className="App">
      <h2>Is your birthday Lucky</h2>
      <label>Date Of Birth:</label>
      <input type="date" onChange={takeDate} />
      <label>Tell me your lucky number:</label>
      <input type="number" onChange={takeNumber} />
      <button onClick={checkForLucky}>Check Now</button>
      <h2>{showMsg}</h2>
      <footer>
        <a href="/">GitHub</a>
        <a href="/">Twitter</a>
      </footer>
    </div>
  );
}
