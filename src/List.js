import { useContext } from "react";
import { Appcontext } from "./App";
import "./styles.css";

export default function List({ task }) {
  const { list, setlist } = useContext(Appcontext);
  const delfromlist = () => {
    const temp = list.filter(function (item) {
      return item !== task;
    });
    setlist(temp);
  };
  return (
    <div className="content">
      <div className="task">{task}</div>
      <div className="buttons">
        <div>
          <button onClick={delfromlist}>
            <i class="fa fa-trash"></i>
          </button>
        </div>
        <div>
          <button onClick={() => navigator.clipboard.writeText(task)}>
            <i class="fa fa-copy"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
