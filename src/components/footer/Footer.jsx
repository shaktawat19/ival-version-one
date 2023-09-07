import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
  .main {
    padding: 40px;
    background-color: purple;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .left-info {
      display: flex;
      flex-direction: column;

      .contact-details {
        display: flex;
        justify-content: space-evenly;
      }
    }

    .right-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .buttons-container button {
        margin-right: 10px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <div className="main">
        <div className="left-info">
          <div className="logo">Logo here</div>
          <div className="contact-details">
            <div className="mail-info">
              <p>Email</p>
              <p>Something@gmail.com</p>
            </div>
            <div className="number-info">
              <p>Phone number</p>
              <p>1212121212</p>
            </div>
          </div>
        </div>
        <div className="right-info">
          <h1>Get Personal Details</h1>
          <div className="buttons-container">
            <button>Get Started</button>
            <button>Login</button>
          </div>
        </div>
      </div>
      <hr />
    </FooterComponent>
  );
};

export default Footer;
