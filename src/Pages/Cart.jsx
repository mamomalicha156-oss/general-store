import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart</h1>

        <p>Your cart is currently empty.</p>

        <Link to="/products" className="shop-button">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="cart-item-info">
              <h3>{item.title}</h3>

              <p>
                ${item.price.toFixed(2)}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>

            <div className="item-total">
              $
              {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>
          Total: ${getCartTotal().toFixed(2)}
        </h2>

        <Link
          to="/checkout"
          className="checkout-button"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;