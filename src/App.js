import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import "./App.css";

const isGoodWeather = true;

function App() {
  const initialActivities = [];
  const [activities, setActivities] = useState(initialActivities);
  function handleAddActivity(data) {
    setActivities([...activities, { key: uid(), ...data }]);
    console.log(activities);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities}></List>
    </>
  );
}

export default App;
