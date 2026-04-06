import React from "react";

function Navbar({ totalItems, onToggleCart }) {
  return (
    <nav className="navbar">
      <h1>Knockout Gear 🥊</h1>

      <div className="cart" onClick={onToggleCart}>
        🛒 {totalItems}
      </div>
    </nav>
  );
}

export default Navbar;