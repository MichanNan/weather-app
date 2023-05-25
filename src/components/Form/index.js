export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <header className="form-header"></header>
      <label htmlFor="activity">Name</label>
      <input name="activity" className="form-activity"></input>
      <label htmlFor="isForGoodWeather">Good-Weather activity</label>
      <input
        name="isForGoodWeather"
        className="form-is-for-good-weather"
        type="checkbox"
      ></input>
      <button className="form-submit">Submit</button>
    </form>
  );
}
