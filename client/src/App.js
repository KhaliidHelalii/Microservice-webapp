import React, { Component } from "react";
import Hero from "./components/Hero";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Details from "./components/Details";
import AboutUsPage from "./components/AboutUs";
import ContactUsPage from "./components/ContactUs";
import ProfilePage from "./components/ProfilePage";
import CartPage from "./components/CartPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      cartItems: [], // Define cartItems in the state
    };
  }

  callAPI() {
    fetch("http://localhost:7000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const { cartItems } = this.state; // Get cartItems from the state

    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Hero />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/About" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    );
  }
}

export default App;
