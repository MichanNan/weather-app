import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import "./App.css";

const isGoodWeather = true;

function App() {
  const initialActivities = [];
  const [activities, setActivities] = useState(initialActivities);
  const initialWeather = {};
  const [weather, setWeather] = useState(initialWeather);
  function handleAddActivity(data) {
    setActivities([
      ...activities,

      {
        ...data,
        key: uid(),
        isForGoodWeather: data.isForGoodWeather === "on" ? true : false,
      },
    ]);
    console.log(activities);
  }

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    setWeather(data);
  }
  fetchWeather();
  return (
    <>
      <header>
        {weather.temperature}
        {weather.condition}
      </header>
      <Form onAddActivity={handleAddActivity} />
      <List activities={filterActivities}></List>
    </>
  );
}

export default App;
