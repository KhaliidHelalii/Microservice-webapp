import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactStars from "react-rating-stars-component";
import Navbar from "./Navbar";
import "./Hero.css";

const Hero = () => {
  const [remainingTime, setRemainingTime] = useState(30 * 60); // 30 minutes in seconds
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutPrice, setCheckoutPrice] = useState(0);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState({ street: "", building: "", apt: "" });
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setCheckoutItems([...checkoutItems, selectedMeal]);
    setCheckoutPrice(checkoutPrice + selectedMeal.price);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:7000/api/products/")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderMeals = filteredMeals.map((meal) => (
    <div className="card col-md-4" key={meal._id}>
      <img src={meal.img} className="w-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{meal.title}</h5>
        <p className="card-text">{meal.description}</p>
        <div>
          <ReactStars />
          <span>{meal.reviews} reviews</span>
          <br />
          <button
            className="details-btn"
            onClick={() => openDetailsModal(meal)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  ));

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const fetchProductDetails = (_id) => {
    fetch(`http://localhost:7000/api/products/${_id}`)
      .then((response) => response.json())
      .then((data) => setSelectedMeal(data))
      .catch((error) => console.log(error));
  };

  const openDetailsModal = (meal) => {
    fetchProductDetails(meal._id);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedMeal(null);
    setIsDetailsModalOpen(false);
  };

  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckout = () => {
    // Perform the necessary checkout logic
    // Display a success toast
    setCheckoutSuccess(true);
  };

  return (
    <div className="hero">
      <div className="content">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="left-side col-md-10">
              <h1>"People who love to eat are always the best people"</h1>
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F15%2F14295-seven-layer-salad-MEREDITH-FOOD-STUDIOS-1x1-1.jpg"
                alt=""
                className="w-100"
              />
            </div>
            <div className="right-side col-md-2 mt-5 text-center p-2">
              <h4 className="text-capitalize">your meal has been shipped</h4>
              <img
                src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-46927.jpg?w=2000"
                className="w-100"
                alt=""
              />
              <p>{formatTime(remainingTime)}</p>
            </div>
          </div>
          <div className="meals">
            <div className="row">
              <div className="col-md-10 d-flex justify-content-between">
                <h3 className="text-capitalize">our meals</h3>
                <input
                  type="text"
                  className="form-control w-50"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="row">{renderMeals}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isDetailsModalOpen}
        onRequestClose={closeDetailsModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedMeal && (
          <div>
            <img src={selectedMeal.img} alt={selectedMeal.title} />
            <h2>{selectedMeal.title}</h2>
            <p>{selectedMeal.desc}</p>
            <p>Categories: {selectedMeal.categories}</p>
            <p>Size: {selectedMeal.size}</p>
            <p>Color: {selectedMeal.color}</p>
            <p>Price: {selectedMeal.price}</p>
            <p>Cart Count: {cartCount}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={openCheckoutModal}>Checkout</button>
            <button onClick={closeDetailsModal}>Close</button>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isCheckoutModalOpen}
        onRequestClose={closeCheckoutModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div>
          <h2>Checkout</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="Street Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="building">Building</label>
            <input
              type="text"
              id="building"
              name="building"
              value={address.building}
              onChange={handleAddressChange}
              placeholder="Building No."
            />
          </div>
          <div className="form-group">
            <label htmlFor="apt">Apt.</label>
            <input
              type="text"
              id="apt"
              name="apt"
              value={address.apt}
              onChange={handleAddressChange}
              placeholder="Apt. No."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <p className="pad-p">Price: {checkoutPrice}</p>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={closeCheckoutModal}>Close Checkout</button>
        </div>
      </Modal>

      {checkoutSuccess && (
        <div className="toast">Success! Order has been placed.</div>
      )}
    </div>
  );
};

export default Hero;
