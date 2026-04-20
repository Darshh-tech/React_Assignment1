import '../App.css';

function Task4() {
    const itemsList = [
        {
            title: 'React Basics',
            url: 'https://react.dev',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux Guide',
            url: 'https://redux.js.org',
            author: 'Dan Abramov',
            num_comments: 2,
            points: 5,
            objectID: 1,
        }
    ];




return (
    <div className="app-container">
        <header className="app-header">
            <h1>React Assignment 1</h1>
        </header>
        <section className="section">
            <h2>Task 4: Items Table</h2>
            <table className="items-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Comments</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsList.map((item) => (
                        <tr key={item.objectID}>
                            <td><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></td>
                            <td>{item.author}</td>
                            <td>{item.num_comments}</td>
                            <td>{item.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    </div>
  );
}

export default Task4;