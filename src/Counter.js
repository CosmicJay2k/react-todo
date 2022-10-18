export default function Counter({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);
  return <h2>{completedTasks.length} completed.</h2>;
}
