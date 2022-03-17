export default function TaskItem({ label }) {
  console.log(label);
  return (
    <li>
      <span>{label}</span>
      <span className="trashcan">🗑</span>
    </li>
  );
}
