import ReactStars from "react-rating-stars-component";
import Popup from "./Popup";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="hero">
      <div className="content">
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="left-side col-md-10">
              <h1>"People who love to eat are always best people"</h1>
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
                  placeholder="search by name"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="row">
                  <div className="card col-md-4">
                    <img
                      src="https://enews.hamariweb.com/wp-content/uploads/2020/09/burger-making-machine-the-burger-bot.jpg"
                      className="w-100"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">risotto</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>
                        <ReactStars />
                        <span>35 reviews</span>
                        <br></br>
                        <Link to="/Details">
                          <span className="header__optionLineTwo">Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card col-md-4">
                    <img
                      src="https://enews.hamariweb.com/wp-content/uploads/2020/09/burger-making-machine-the-burger-bot.jpg"
                      className="w-100"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">risotto</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>
                        <ReactStars />
                        <span>35 reviews</span>
                        <br></br>
                        <Link to="/Details">
                          <span className="header__optionLineTwo">Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card col-md-4">
                    <img
                      src="https://enews.hamariweb.com/wp-content/uploads/2020/09/burger-making-machine-the-burger-bot.jpg"
                      className="w-100"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">risotto</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div>
                        <ReactStars />
                        <span>35 reviews</span>
                        <br></br>
                        <Link to="/Details">
                          <span className="header__optionLineTwo">Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => setButtonPopup(true)}
                type="button"
                className="btn btn-danger w-25"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add Product
              </button>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add product
                  </h5>
                  <button
                    onClick={() => setButtonPopup(false)}
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group mb-5">
                      <div
                        className="
                                            d-flex
                                            justify-content-center
                                            align-items-center"
                      >
                        <input
                          type="text"
                          className="form-control w-50"
                          id=""
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-5">
                      <div
                        className="
                                            d-flex
                                            justify-content-center
                                            align-items-center"
                      >
                        <input
                          type="text"
                          className="form-control w-50"
                          placeholder="Description"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-5">
                      <div
                        className="
                                            d-flex
                                            justify-content-center
                                            align-items-center"
                      >
                        <input
                          type="file"
                          className="form-control w-50"
                          placeholder=""
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-5">
                      <div
                        className="
                                            d-flex
                                             justify-content-center
                                             align-items-center"
                      >
                        <input
                          type="number"
                          className="form-control w-50"
                          placeholder="Price"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => setButtonPopup(false)}
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger">
                    Add
                  </button>
                </div>
              </div>
            </Popup>
          </div>
          <div className="adminopanela"></div>
          {/* __________________________________Register_______________________________________________ */}
          {/* _____________________________________Details___________________________________________ */}
          {/* _______________________________ChefPanel_____________________________________________ */}
          {/* ___________________________________AdminPanel__________________________________________ */}
          <div className="adminopanel"></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
