import React from 'react';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Product List (React Hooks + Axios)</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}
