import "./Form.css";
export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    /*get data from the form */
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <header className="form-header"></header>
      <label htmlFor="activity">Activity Name</label>
      <input name="activity" className="form-activity"></input>
      <label htmlFor="isForGoodWeather">
        <input
          name="isForGoodWeather"
          className="form-is-for-good-weather"
          type="checkbox"
        ></input>{" "}
        Good-Weather activity{" "}
      </label>

      <button className="form-submit">Submit</button>
    </form>
  );
}
