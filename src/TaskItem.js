export default function TaskItem({ label, completed, time, onTrash, onItem }) {
  const onClickItem = () => {
    onItem(time);
  };

  const onClickTrash = () => {
    onTrash(time);
  };
  return (
    <li key={time}>
      <span className={completed ? "completed" : null} onClick={onClickItem}>
        {label}
      </span>
      <span className="trashcan" onClick={onClickTrash}>
        🗑
      </span>
    </li>
  );
}
