import React from "react";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";


const Confirmation = ({handleCloseModal}) => {
    const navigate = useNavigate()

    const navigateHome = () => {
        handleCloseModal
        navigate('/')
    }

  return (
    <>
      <div className="confirmation_container">
        <div className="full_page">
          <h1>Your Application Has Been Recieved</h1>
          <p>We'll Get Back To You Shortly</p>
          <section className="buttons">
            <button type="button" onClick={handleCloseModal}>Close</button>
            <button type="button" onClick={navigateHome}>Home</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
