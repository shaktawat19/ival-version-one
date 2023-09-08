import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
  .main {
    padding: 60px 80px 40px;
    background: #1b3f58;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .footer-top {
      display: flex;
      width: 85vw;
      justify-content: space-between;
      align-items: flex-start;

      .left-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;

        .contact-details {
          display: flex;
          align-items: flex-start;
          gap: 32px;
        }
      }

      .right-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        .buttons-container {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        }
      }
    }

    .footer-liner {
      width: 85vw;
      height: 1px;
      background-color: #fff;
    }

    .footer-bottom {
      display: flex;
      width: 85vw;
      justify-content: space-between;
      align-items: center;

      .service {
        display: flex;
        align-items: flex-start;
        gap: 32px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <div className="main">
        <div className="footer-top">
          <div className="left-info">
            <div className="logo">Logo here</div>
            <div className="contact-details">
              <div className="mail-info">
                <p>Email</p>
                <p>Something@gmail.com</p>
              </div>
              <div className="number-info">
                <p>Phone number</p>
                <p>+1 (201) 895-3801</p>
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
        <div className="footer-liner"></div>
        <div className="footer-bottom">
          <div className="copyrights">
            © 2023 Ival Inc. All rights reserved.
          </div>
          <div className="service">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;
