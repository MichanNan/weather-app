import "./List.css";
export default function List({ activities }) {
  return (
    <ul className="list">
      {activities.map((activity) => (
        <li key={activity.key}>{activity.activity}</li>
      ))}
    </ul>
  );
}
