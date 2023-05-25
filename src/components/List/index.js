import "./List.css";
export default function List({ activities }) {
  return (
    <li className="list">
      {activities.map((activity) => (
        <li>{activity.activity}</li>
      ))}
    </li>
  );
}
