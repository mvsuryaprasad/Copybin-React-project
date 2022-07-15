import { useState } from "react";
import List from "./List";
import "./styles.css";
import { createContext, useRef } from "react";

export const Appcontext = createContext();

export default function App() {
  const [list, setlist] = useState([]);
  const [task, settask] = useState("");

  const addtolist = () => {
    setlist([...list, task]);
    settask("");
  };

  return (
    <div className="App">
      <div className="main-nav">
        <div className="nav">
          <h2>Copy bin</h2>
        </div>
        <div className="input-fields">
          <input
            placeholder="Enter the task"
            value={task}
            onChange={(event) => {
              settask(event.target.value);
            }}
          />
          <button onClick={addtolist}>Add</button>
        </div>
      </div>
      <div className="main-content">
        {list.map((x) => {
          return (
            <Appcontext.Provider value={{ list, setlist }}>
              <List task={x} />
            </Appcontext.Provider>
          );
        })}
      </div>
    </div>
  );
}
