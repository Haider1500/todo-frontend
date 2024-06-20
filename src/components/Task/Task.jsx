import "./Task.css";

function Task({ task, onDelete, idx, onComplete, onEdit }) {
  return (
    <div className="task">
      <input type="checkbox" onClick={() => onComplete(idx)} />
      <p
        className="title"
        style={
          task.completed
            ? {
                textDecoration: "line-through",
                textDecorationColor: "purple",
                textDecorationThickness: 3,
              }
            : {}
        }
      >
        {task.title}
      </p>
      <div className="buttons">
        <button onClick={() => onDelete(idx)}>Delete</button>
        <button onClick={() => onEdit(idx)}>Edit</button>
      </div>
    </div>
  );
}

export default Task;
