import Task from "../Task/Task";
import "./TaskList.css";

import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [inpValue, setInpValue] = useState("");

  function handleChange(e) {
    setInpValue(e.target.value);
  }

  function handleAdd() {
    if (inpValue === "") return;
    setTasks([...tasks, { title: inpValue, completed: false }]);
    setInpValue("");
  }

  function handleDelete(index) {
    const filteredTasks = tasks.filter((_, idx) => idx != index);
    setTasks(filteredTasks);
  }

  function handleCompleted(index) {
    const newTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  function handleEdit(index) {
    tasks.forEach((task, idx) =>
      idx === index ? setInpValue(task.title) : ""
    );
    setTasks(tasks.filter((_, idx) => index != idx));
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="input-field">
        <input
          type="text"
          onChange={handleChange}
          value={inpValue}
          placeholder="Enter task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="task-container">
        {tasks.map((task, idx) => (
          <Task
            task={task}
            idx={idx}
            onDelete={handleDelete}
            onComplete={handleCompleted}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
