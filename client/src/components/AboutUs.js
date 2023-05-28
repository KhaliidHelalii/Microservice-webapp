import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css";
import Abtus from "../Assets/abtus.jpeg";
const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Welcome to our food ordering website! We are passionate about
          providing delicious and high-quality food to our customers.
        </p>
        <p>
          Our mission is to make it easy for you to order your favorite meals
          from the comfort of your home or office.
        </p>
        <p>
          At our restaurant, we prioritize using fresh and locally sourced
          ingredients to ensure the best taste and quality in every dish.
        </p>
        <p>
          Whether you're craving pizza, sushi, burgers, or healthy salads, we
          have a diverse menu that caters to all taste preferences.
        </p>
        <p>
          Our team of talented chefs and friendly staff are dedicated to
          delivering an exceptional dining experience for every customer.
        </p>
        <p>
          We value your feedback, so please don't hesitate to contact us if you
          have any questions, suggestions, or concerns.
        </p>
        <p>
          Thank you for choosing our food ordering website. We look forward to
          serving you!
        </p>
      </div>
      <div className="image-abtus">
        <img src={Abtus} alt="img"></img>
      </div>
    </>
  );
};

export default AboutUsPage;
