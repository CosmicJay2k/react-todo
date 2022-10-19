export default function TaskItem({ label, completed }) {
  return (
    <li>
      <span className={completed ? "completed" : null}>{label}</span>
      <span className="trashcan">🗑</span>
    </li>
  );
}
