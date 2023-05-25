import "./List.css";
export default function List({ activities, onDeleteActivity }) {
  return (
    <ul className="list">
      {activities.map((activity) => (
        <li key={activity.key} id={activity.id}>
          {activity.activity}{" "}
          <button
            className="delete"
            onClick={() => {
              onDeleteActivity(activity.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
