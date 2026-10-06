import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product could not be found");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="product-details">
      <div className="details-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="details-info">
        <p className="details-category">
          {product.category}
        </p>

        <h1>{product.title}</h1>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <p className="rating">
          Rating: {product.rating} / 5
        </p>

        <p>Stock: {product.stock}</p>

        <button
          className="add-cart-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;