import './App.css';
import React from 'react';
import GroceryItem from './Component/GroceryItems';
import ShoppingBag from './Component/ShoppingBag';
import PocketMoney from './Component/pocketMoney';
import Stats from './Component/Stats';

function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="jumbotron jumbotron-fluid text-center col-md-12">
          <h1 className="display-4">Online Shopping Store!</h1>
          <p className="led">Where you can get your daily products.</p>
        </div>
      </div>

      <div className="row">
        <PocketMoney/>
      </div>

      <div className="row">
        <GroceryItem />
        <ShoppingBag />
        <Stats />
      </div>

    </div>
  );
}

export default App;
