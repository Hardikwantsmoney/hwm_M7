import React from "react";

function Cart({
  cartItems,
  totalItems,
  totalPrice,
  onToggleCart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  return (
    <div className="cart-overlay">
      <div className="cart-box">
        <button onClick={onToggleCart}>Close ❌</button>

        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>

                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            ))}

            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ₹{totalPrice}</h3>

            <button onClick={onClearCart}>Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;