import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onClick }) {
  const taskElements = tasks.map((task) => {
    return (
      <TaskItem
        key={task.label}
        label={task.label}
        completed={task.completed}
        onClick={onClick}
      />
    );
  });
  return <ul className="toDoList">{taskElements}</ul>;
}
