import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = (e) => {
    onDelete(task.id);
  };
  const handleEditClick = (e) => {
    setShowEdit(!showEdit);
  };
  const handleSumbit = (id, updatedTitle, updatedeTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedeTaskDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSumbit} />
      ) : (
        <div>
          <h3 className="task-title">Goreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapilacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Duzenle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
