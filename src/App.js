import './App.css';

/** * TASK 5: User Card Component*/
const UserCard = ({ name, age, email }) => (
  <div className="user-card">
    <h4>User Card</h4>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Age:</strong> {age}</p>
    <p><strong>Email:</strong> {email}</p>
  </div>
);

/** * TASK 6: Product Item Component (Child) */
const ProductItem = ({ name, price }) => (
  <li className="product-item">
    {name} — <span className="price">{price} Rs</span>
  </li>
);

function App() {
  // --- Data for Task 3: Dynamic Greeting ---
  const userVariable = "Hello World :)";

  // --- Data for Task 4: Table List ---
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

  // --- Data for Task 6: Products Array ---
  const products = [
    { id: 101, name: "Mechanical Keyboard", price: 1200 },
    { id: 102, name: "Ultra-wide Monitor", price: 45000 },
    { id: 103, name: "Wireless Mouse", price: 500 }
  ];
  
  
  
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Assignment 1</h1>
      </header>

      {/* TASK 1: Personal Info */}
      <section className="section">
        <h2>Task 1: Personal Info</h2>
        <div className="info-card">
          <p><strong>Name:</strong> Darsh Pincha</p>
          <p><strong>Profession:</strong> Software Engineer</p>
          <p><strong>Hobby:</strong> Video editing, Photography</p>
        </div>
      </section>

      {/* TASK 2: Current Date & Time */}
      <section className="section">
        <h2>Task 2: Date & Time</h2>
        <div className="info-card">
          <p>The current date and time is: <strong>{new Date().toLocaleString()}</strong></p>
        </div>
      </section>

      {/* TASK 3: Dynamic Greeting */}
      <section className="section">
        <h2>Task 3: Dynamic Greeting</h2>
        <div className="greeting">
          <h3>Hello, {userVariable}!</h3>
        </div>
      </section>

      {/* TASK 4: Map List to Table */}
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

      {/* TASK 5: User Card (Props) */}
      <section className="section">
        <h2>Task 5: User Card</h2>
        <UserCard name="Darsh Pincha" age={19} email="bothradarsh06@gmail.com" />
      </section>

      {/* TASK 6: Product List (Parent-Child) */}
      <section className="section">
        <h2>Task 6: Product List</h2>
        <ul className="product-list">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
