import { Draggable } from "react-beautiful-dnd"
import { FaTrashAlt } from "react-icons/fa"

export const Task = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      )}
    </Draggable>
  )
}
