import '../App.css';

function Task2() {
  return (
    <section className="section">
      <h2>Task 2: Date & Time</h2>
      <div className="info-card">
        <p>
          The current date and time is: 
          <strong> {new Date().toLocaleString()}</strong>
        </p>
      </div>
    </section>
  );
}

export default Task2;