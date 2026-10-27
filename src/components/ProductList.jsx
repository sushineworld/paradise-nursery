
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const products = [
  { id: 1, name: 'Snake Plant', price: 299, category: 'Indoor', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b6e' },
  { id: 2, name: 'Peace Lily', price: 399, category: 'Indoor', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee' },
  { id: 3, name: 'Aloe Vera', price: 199, category: 'Succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09' },
  { id: 4, name: 'Jade Plant', price: 249, category: 'Succulents', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
  { id: 5, name: 'Monstera', price: 499, category: 'Indoor', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b' },
  { id: 6, name: 'Golden Pothos', price: 249, category: 'Hanging', image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86' },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <main className="product-page">
      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>Find the perfect plants to bring your home to life.</p>
        <h2>Our Plants</h2>
        <p>Items in cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
      </header>

      <section className="product-grid">
        {products.map((product) => {
          const inCart = cartItems.some((item) => item.id === product.id);

          return (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button
                onClick={() => dispatch(addItem(product))}
                disabled={inCart}
              >
                {inCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default ProductList;
