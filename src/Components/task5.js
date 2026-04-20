
import '../App.css';

function Task5() {

    const UserCard = ({ name, age, email }) => (
        <div className="user-card">
            <h4>User Card</h4>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );





return (
    <div className="app-container">
        <header className="app-header">
            <h1>React Assignment 1</h1>
        </header>
        <section className="section">
            <h2>Task 5: User Card</h2>
            <UserCard name="Darsh Pincha" age={19} email="bothradarsh06@gmail.com" />
        </section>
    </div>
  );
}

export default Task5;