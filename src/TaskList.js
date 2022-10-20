import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onTrash, onItem }) {
  const taskElements = tasks.map((task) => {
    return (
      <TaskItem
        key={task.time}
        time={task.time}
        label={task.label}
        completed={task.completed}
        onTrash={onTrash}
        onItem={onItem}
      />
    );
  });
  return <ul className="toDoList">{taskElements}</ul>;
}
