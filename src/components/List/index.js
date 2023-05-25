import "./List.css";
export default function List({ activities, onDeleteActivity, goodWeather }) {
  return (
    <>
      <p>
        {goodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </p>
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
    </>
  );
}
