import { useContext, useState } from "react";
import { MdFactCheck } from "react-icons/md";
import Confetti from "react-dom-confetti";
import "./CheckoutForm.css";
import { ProductContext } from "../../state/ProductContext";
import { formatPrice } from "../ProductCard/ProductCard"; 

const CheckoutForm = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState(false);
   

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  // Function to handle clearing the cart and restoring it to its initial state
  const clearCart = () => {
    setCartItems([]);
    setReceiptVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage("Please fill out the name and email fields.");
      return;
    } else {
      if (!cartItems.length) {
        setErrorMessage("You need items in the cart to checkout!");
        return;
      }
      setErrorMessage("");
      console.log("Checkout successful!");
    }

     // Calculate subtotal, tax, and total
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.0875; 
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

     // Set the receipt details
    const receipt = {
      name,
      email,
      items: cartItems,
      subtotal,
      tax,
      total,
      };


    // Clear the form fields and update cart items after successful checkout
    setName("");
    setCartItems([]);
    setEmail("");
    setAgreeTerms(false);

    // Render the confetti component
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, confettiConfig.duration);

    // Display the receipt
    setReceiptVisible(true);
    setReceiptDetails(receipt);
};

  
  return (
    <div className="checkout-form-container">
      <h3 className="form-title">Checkout Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>
        <button className="submit-button" type="submit" disabled={!agreeTerms}>
          Checkout
        </button>
      </form>

      <div className="checkout-info">
        <div className="checkout-title-icon">
          <h4 className="info-title">Checkout Info</h4>
          <MdFactCheck className="info-icon" />
        </div>
        <p className="info-text">
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to
          your dorm room.
        </p>
      </div>

      {/* Confetti component */}
      <Confetti active={confettiActive} config={confettiConfig} />

       {/* Receipt section */}
       {receiptVisible && (
        <div className="receipt">
          <h3 className="receipt-title">Receipt🤩</h3>
          <div className="receipt-details">
            <p className="receipt-label">Name: {receiptDetails.name}</p>
            <p className="receipt-label">Email: {receiptDetails.email}</p>
            <p className="receipt-label">Items:</p>
            <ul className="receipt-items">
              {receiptDetails.items.map((item) => (
                <li key={item.id}>
                  {item.name} - Quantity: {item.quantity} - Price: {formatPrice(item.price)}
                </li>
              ))}
            </ul>
            <p className="receipt-label">Subtotal: {formatPrice(receiptDetails.subtotal)}</p>
            <p className="receipt-label">Tax: {formatPrice(receiptDetails.tax)}</p>
            <p className="receipt-label">Total: {formatPrice(receiptDetails.total)}</p>
          </div>
        </div>
      )}

      {/* Exit button */}
      {receiptVisible && (
        <button
        className="exit-button"
        style={{
          backgroundColor: "#e53935",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "25px",
          postion: "center",
          fontWeight: "bold"
        }}
        onClick={clearCart}
      >
        Exit
      </button>
      )}
    </div>
  );
};

export default CheckoutForm;
