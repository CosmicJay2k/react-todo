export default function TaskItem({ label, completed, time, onTrash }) {
  const onClickTrash = () => {
    onTrash(time);
  };
  return (
    <li key={time}>
      <span className={completed ? "completed" : null}>{label}</span>
      <span className="trashcan" onClick={onClickTrash}>
        🗑
      </span>
    </li>
  );
}
