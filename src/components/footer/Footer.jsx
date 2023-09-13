import React from "react";
import styled from "styled-components";
import logo from "../../icons/logo.svg";
import ButtonComponent from '../button/ButtonComponent';
const FooterComponent = styled.div`
  .main {
    width: 100%;
    padding: 60px 80px 40px;
    background: #1B3F58;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    .footer-top {
      display: flex;
      width: 100%;
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
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        .buttons-container {
          display: flex;
          width: 100%;
          .getstarted-btn {
            background-color: #F09021;
            border:none;
            color:white;
            margin-right: 20px;
            padding: 0.7rem 2.8rem;
          }
          .login-btn {
            color:white;
            background-color:#1B3F58;
            padding: 0.66rem 4rem;
            border: 1px solid #fff;
          }
        }
      }
    }
    .footer-liner {
      width: 100%;
      height: 1px;
      background-color: #fff;
    }
    .footer-bottom {
      display: flex;
      width: 100%;
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
            <div className="logo">
              <img src={logo} alt="" />
            </div>
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
            <h1>Get started with personal manager now</h1>
            <div className="buttons-container">
              {/* <button className="getstarted-btn">Get Started</button> */}
              <ButtonComponent className="getstarted-btn">GET STARTED</ButtonComponent>
              {/* <button className="login-btn">Login</button> */}
              <ButtonComponent className="login-btn">
                Login
              </ButtonComponent>
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