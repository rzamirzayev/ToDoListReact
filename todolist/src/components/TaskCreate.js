import { useState } from "react";
function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lutfen Taski duzenliyin</h3>
          <form className="task-from">
            <label className="task-label">Basliki duzenliyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taski duzenliyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSumbit}
            >
              Duzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Task ekleyin!</h3>
          <form className="task-from">
            <label className="task-label">Baslik</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSumbit}>
              Olustur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
