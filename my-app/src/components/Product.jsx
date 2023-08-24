import React, { Fragment, useEffect, useState } from "react";

const Product = () => {
  console.log("Welcome to product component");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data?.products);
      });
    setLoading(false);
  };

  useEffect(() => {
    console.log("useEffect block");
    fetchProducts();
  }, []);

  return (
    <>
      <div className="product">
        {/* <button onClick={fetchProducts}>Get products</button> */}

        {loading ? (
          <div class="loading-spinner"></div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Brand</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.brand}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Product;
