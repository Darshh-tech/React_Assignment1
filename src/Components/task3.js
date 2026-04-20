import '../App.css';

function Task3() {
    // --- Data for Task 3: Dynamic Greeting ---
    const userVariable = "Hello World :)";



return (
    <div className="app-container">
        <header className="app-header">
            <h1>React Assignment 1</h1>
        </header>
        <section className="section">
            <h2>Task 3: Dynamic Greeting</h2>
            <div className="greeting">
                <h3>Hello, {userVariable}!</h3>
            </div>
        </section>

    </div>
  );
}

export default Task3;