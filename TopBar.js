import React, { Fragment }  from 'react';

const TopBar = () => {
  return (
  <div className="app-top-bar">
    <a href="#">
      <h1>My Store</h1>
    </a>
    <a className="button fancy-button">
      <i class="material-icons">shopping_cart</i>Checkout
    </a>
  </div>
  )
};

export default TopBar;