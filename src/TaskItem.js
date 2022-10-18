export default function TaskItem(props) {
  return (
    <li>
      <span
        className={props.completed ? "completed" : null}
        onClick={props.onClick}
      >
        {props.label}
      </span>
      <span className="trashcan">🗑</span>
    </li>
  );
}
