import React, { useState } from "react";
import Navbar from "./Navbar";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

import "./Details.css";
function Details() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(6.99);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const calculateTotalPrice = () => {
    return (count * price).toFixed(2);
  };
  const handleCheckout = () => {
    // Redirect to the checkout page
    navigate("/checkout");
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="details m-auto w-75 ">
        <div className="row details-header">
          <div className="col-md-4">
            <img
              src="https://enews.hamariweb.com/wp-content/uploads/2020/09/burger-making-machine-the-burger-bot.jpg"
              className="w-100 "
              alt=""
            />
          </div>
          <div className="col-md-7 offset-1">
            <h3 className="text-capitalize">pizza</h3>
            <p>
              cheif loay
              <ReactStars />
            </p>
          </div>
        </div>
        <div className="row details-content">
          <div className="col-md-12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              ducimus dicta nulla? Cupiditate odio et officiis provident
              inventore impedit maiores in voluptates exercitationem accusamus,
              fuga ad iure!
            </p>
          </div>
        </div>
        <div className="row details-cart">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <span>quantity:</span>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-1">
                        <button
                          className="counter-button"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-md-2">
                        <span className="counter">{count}</span>
                      </div>
                      <div className="col-md-1">
                        <button
                          className="counter-button2"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p id="price">{calculateTotalPrice(setPrice)}$</p>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-danger text-capitalize"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h2>Cart Details</h2>
                <p>Quantity: {count}</p>
                <p>Total Price: {calculateTotalPrice()}$</p>
                <button className="btn btn-primary" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Details;
