import React from "react";
import Navbar from "./Navbar";

class Register extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const article = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`http://localhost:7000/api/auth/register`, {
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
        // Signup successful
        // Redirect to "/"

        alert("Signup Success");
        window.location.href = "/Login";
      } else {
        // Handle signup error
        console.log("Signup failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  render() {
    return (
      <div class=" login text-center ">
        <Navbar></Navbar>
        <h3 class="text-capitalize text-center mb-5">Register</h3>
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
                type="text"
                name="email"
                placeholder="E-mail"
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
        </form>
      </div>
    );
  }
}
export default Register;
