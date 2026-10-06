import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div>
          <h1>Welcome to Mamo Store</h1>

          <p>
            Discover quality products at affordable prices.
          </p>

          <Link to="/products" className="shop-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="home-section">
        <h2>Why Shop With Us?</h2>

        <div className="features">
          <div className="feature">
            <h3>Quality Products</h3>
            <p>
              Browse a wide range of products in one place.
            </p>
          </div>

          <div className="feature">
            <h3>Easy Shopping</h3>
            <p>
              Find products and add them to your cart easily.
            </p>
          </div>

          <div className="feature">
            <h3>Simple Checkout</h3>
            <p>
              Complete your order through our simple checkout process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;