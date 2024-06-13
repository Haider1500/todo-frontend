import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [inpValue, setInpValue] = useState("");
  function handleChange(e) {
    setInpValue(e.target.value);
  }
  function handleAdd(e) {
    setTasks([...tasks, inpValue]);
  }
  return (
    <div>
      <h1>TODO list</h1>
      <input type="text" onChange={handleChange} value={inpValue} />
      <button onClick={handleAdd}>Add</button>
      <div>
        {tasks.map((task, idx) => (
          <p>{task}</p>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
