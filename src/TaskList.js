import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  const taskElements = tasks.map((task) => {
    return (
      <TaskItem
        key={task.label}
        label={task.label}
        completed={task.completed}
      />
    );
  });
  return <ul className="toDoList">{taskElements}</ul>;
}
