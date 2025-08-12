import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
  ProductList component
  - uses useState for state management
  - uses useEffect to fetch product data from https://fakestoreapi.com/products using axios
  - purely functional component (no class components)
*/

export default function ProductList() {
  const [products, setProducts] = useState([]); // list of products
  const [loading, setLoading] = useState(true); // loading flag
  const [error, setError] = useState(null);     // error message

  useEffect(() => {
    let isMounted = true; // avoid state update if component unmounted

    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axios.get('https://fakestoreapi.com/products');
        if (isMounted) {
          setProducts(res.data || []);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError('Failed to fetch products. ' + (err.message || ''));
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProducts();

    // cleanup
    return () => { isMounted = false; };
  }, []); // empty dependency array => runs once on mount

  return (
    <section className="product-list">
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      <div className="grid">
        {products.map((p) => (
          <article key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <div className="card-body">
              <h3 title={p.title}>{p.title.length > 60 ? p.title.slice(0,60) + '…' : p.title}</h3>
              <p className="price">₹{(p.price * 82).toFixed(0)} (approx)</p>
              <p className="category">{p.category}</p>
              <p className="desc">{p.description.length > 120 ? p.description.slice(0,120) + '…' : p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
