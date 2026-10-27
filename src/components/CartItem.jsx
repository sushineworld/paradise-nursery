
import { useDispatch } from 'react-redux';
import {
  removeItem,
  updateQuantity,
} from '../redux/CartSlice';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Subtotal: ₹{item.price * item.quantity}</p>

        <div className="quantity-controls">
          <button
            onClick={decreaseQuantity}
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={increaseQuantity}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;
