import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import Navbar from "./Navbar";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChangeUsername = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userid"); // Assuming user ID is stored in local storage
    const accToken = localStorage.getItem("accessToken"); // Assuming authorization token is stored in local storage
    fetch(`http://localhost:7000/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:7000/*",
        Authorization: `Bearer ${accToken}`,
        mode: "cors",
      },
      body: JSON.stringify({
        username: newUsername,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error changing username");
        }
      })
      .then((data) => {
        console.log("Username changed successfully:", data);
        setUserData(data);
        setNewUsername("");
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error changing username:", error);
      });
  };

  useEffect(() => {
    const userId = localStorage.getItem("userid"); // Assuming user ID is stored in local storage
    const accToken = localStorage.getItem("accessToken"); // Assuming authorization token is stored in local storage

    if (userId && accToken) {
      fetch(`http://localhost:7000/api/users/find/${userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:7000*",
          Authorization: `Bearer ${accToken}`,
          mode: "cors",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error fetching user data");
          }
        })
        .then((data) => {
          console.log(data.username, data.email, data.createdAt);
          setUserData(data);
        })
        .catch((error) => {
          console.log("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-page__header">
          <h2 className="profile-heading">Profile Page</h2>
          <div className="profile-item">
            <strong className="profile-label">Username:</strong>{" "}
            {userData ? userData.username : "Loading..."}
          </div>
          <div className="profile-item">
            <strong className="profile-label">Email:</strong>{" "}
            {userData ? userData.email : "Loading..."}
          </div>
          <div className="profile-item">
            <strong className="profile-label">Creation Date:</strong>{" "}
            {userData ? userData.createdAt : "Loading..."}
          </div>

          <button className="change-btn" onClick={handleOpenModal}>
            Change Account Data
          </button>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Change Account Data</h3>
              <form onSubmit={handleChangeUsername}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </div>
                <button type="submit">Save Changes</button>
              </form>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
