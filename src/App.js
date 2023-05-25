import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import "./App.css";

function App() {
  const initialActivities = [];
  const [activities, setActivities] = useState(initialActivities);
  const initialWeather = { temperature: "0", condition: "" };
  const [weather, setWeather] = useState(initialWeather);

  function handleAddActivity(data) {
    setActivities([
      ...activities,

      {
        ...data,
        key: uid(),
        id: uid(),
        isForGoodWeather: data.isForGoodWeather === "on" ? true : false,
      },
    ]);
    console.log(activities);
  }

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log("ERROR!");
      }
    }
    const timer = setInterval(fetchWeather, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleDeleteActivity(id) {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  }
  return (
    <>
      <header>
        {weather.temperature}
        {weather.condition}
      </header>
      <Form onAddActivity={handleAddActivity} />
      <List
        activities={filterActivities}
        onDeleteActivity={handleDeleteActivity}
      ></List>
    </>
  );
}

export default App;
