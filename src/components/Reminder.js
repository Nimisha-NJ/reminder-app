import React, { useState } from "react";
import "./Reminder.css";

function Reminder() {
  const [data, setData] = useState("");
  const [saveData, setSaveData] = useState([]);

  const handleChange = (event) => {
    setData(event.target.value);
    console.log(data);
  };

  const handleButton = () => {
    setSaveData([...saveData, data]);
    setData("");
  };

  const handleDelete = (index) => {
    setSaveData(saveData.filter((data, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="container">
      <h2>Reminder App</h2>

      <div className="input-container">
        <input
          type="text"
          value={data}
          placeholder="Add Reminder"
          onChange={handleChange}
        ></input>
        <button className="add-btn" onClick={handleButton}>
          ADD Reminder
        </button>
      </div>
      {saveData.length > 0 ? (
        <ul className="reminder-list">
          {saveData.map((value, index) => (
            <li key={index}>
              {value}
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reminders</p>
      )}
    </div>
  );
}

export default Reminder;
