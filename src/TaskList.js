import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onTrash }) {
  const taskElements = tasks.map((task) => {
    return (
      <TaskItem
        key={task.time}
        time={task.time}
        label={task.label}
        completed={task.completed}
        onTrash={onTrash}
      />
    );
  });
  return <ul className="toDoList">{taskElements}</ul>;
}
