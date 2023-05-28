import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class Login extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    const article = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(`http://localhost:7000/api/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:7000*",
          mode: "no-cors",
        },
        body: JSON.stringify(article),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
        const userId = data._id; // Assuming the response contains the user ID
        const accessToken = data.accessToken; // Assuming the response contains the access token

        // Save user ID and access token in local storage
        localStorage.setItem("userid", userId);
        localStorage.setItem("accessToken", accessToken);

        // Redirect to "/"
        alert("Login Success");
        window.location.href = "/";
      } else {
        // Handle login error
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  render() {
    return (
      <div class=" login text-center ">
        <Navbar></Navbar>
        <h3 class="text-capitalize text-center mb-5">Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group mb-4">
            <div class="d-flex justify-content-center align-items-center">
              <input
                class="form-control w-50"
                type="text"
                name="username"
                placeholder="Username"
                ref={(node) => (this.inputNode = node)}
              />
            </div>
          </div>
          <div class="form-group mb-4">
            <div class="d-flex justify-content-center align-items-center">
              <input
                class="form-control w-50"
                type="password"
                placeholder="password"
                name="password"
                ref={(node) => (this.inputNode = node)}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-danger w-50">
            Submit
          </button>
          <li>
            <Link to="/Register">
              <span className="header__optionLineTwo">Register</span>
            </Link>
          </li>
        </form>
      </div>
    );
  }
}
export default Login;
