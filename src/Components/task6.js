import '../App.css';

function Task6() {

const ProductItem = ({ name, price }) => (
  <li className="product-item">
    {name} — <span className="price">{price} Rs</span>
  </li>
);


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

export default Task6;