import { v4 as uuidv4 } from "uuid"

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    // uuidで重複しない番号を生成
    const taskId = uuidv4()
    e.preventDefault()

    // 入力が空の場合は処理を修了
    if (inputText === "") {
      return
    }

    // カードを追加する処理
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ])
    setInputText("")
  }
  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
