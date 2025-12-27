import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App({ products }) {
  const [count, setCount] = useState(0);

  /* 🔹 useMemo: total price calculation */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  /* 🔹 useCallback: memoized handler */
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
