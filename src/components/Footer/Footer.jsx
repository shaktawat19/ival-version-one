import "./Footer.css";
const Footer = () => {
  return (
    <div className="version-8-light">
      <div className="bottom-line" />
      <div className="container">
        <div className="ival-inc-all">
          © 2023 Ival Inc. All rights reserved.
        </div>
        <div className="links">
          <div className="ival-inc-all">Terms of Service</div>
          <div className="ival-inc-all">Privacy Policy</div>
          <div className="ival-inc-all">Cookies</div>
        </div>
      </div>
      <div className="footer-line" />
      <div className="container1">
        <div className="logo-and-contacts">
          <img className="layer-1-icon1" alt="" src="/layer-1.svg" />
          <div className="links">
            <div className="email-group">
              <div className="ival-inc-all">Email</div>
              <div className="helloivalcom">hello@Ival.com</div>
            </div>
            <div className="email-group">
              <div className="ival-inc-all">Phone Number</div>
              <div className="helloivalcom">+1 (201) 895-3801</div>
            </div>
          </div>
        </div>
        <div className="title-and-buttons">
          <div className="get-started-with">
            Get started with personal manager now
          </div>
          <div className="buttons">
            <div className="get-started-wrapper">
              <b className="get-started">Get Started</b>
            </div>
            <div className="login-wrapper">
              <b className="get-started">LogIn</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
