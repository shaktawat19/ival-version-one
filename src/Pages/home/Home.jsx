import * as React from "react";
import styled from "styled-components";
import Accordion from '../../components/accordion/Accordion';
import Footer from "../../components/footer/Footer";

const Navbar = styled.div`
  display: flex;
  padding: 16px 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2px solid #fff;
  background: #1b3f58;
  color: #fff;
`;

const NavbarMid = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 48px;
`;

const NavbarButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HeroComponent = styled.div`
  height: 90vh;
  background: #1b3f58;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 80px 0;
`;

const HeroComponentInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 100px;

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    .right-mid {
      width: 100%;

      input {
        width: 80%;
      }
    }

    .partitioner {
      display: flex;
      width: 379px;
      align-items: center;
      gap: 24px;

      .liner {
        width: 157px;
        height: 1px;
        background: #d9d9d9;
      }
    }
  }
`;
const HeroComponentImage = styled.div`
  padding-top: 90px;
  img {
    width: 1224px;
    height: 445px;
    flex-shrink: 0;
    background: lightgray 50% / cover no-repeat, #d9d9d9;
  }
`;

const AchievementsComponent = styled.div`
  display: flex;
  width: 1224px;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 56px 80px;
  margin-top: 100px;
`;
const LeftSection = styled.div`
  display: flex;
  width: 392px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;

  h2 {
    align-self: stretch;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 64px;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    .numbers {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
`;

const EvaluationComponent = styled.div`
  padding: 16px 80px 80px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  gap: 80px;

  .left-img {
    background: lightgray 50% / cover no-repeat, #1b3f58;
  }
`;

const WhyIvalComponent = styled.div`
  padding: 16px 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfbf9;

  h1 {
    padding: 50px;
  }

  .ival-info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .ival-info-card {
      display: flex;
      width: 288px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 20px 0;
    }
  }
`;

const VideoContainerComponent = styled.div`
  padding: 16px 80px;
  display: flex;
  background: #1b3f58;
  color: #fff;
  height: 80vh;
  align-items: center;
  gap: 50px;

  .left {
    width: 60%;
  }
  .right {
    display: flex;
    width: 482px;
    flex-direction: column;
    align-items: flex-start;
    gap: 54px;
  }
`;

const CarouselComponent = styled.div`
  background: #fff;
  height: 70vh;
`;

const PartnerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 50px 0 50px;

  .partner-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .partner-icons {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const LearnMoreComponent = styled.div`
  background: #1b3f58;
  // height: 70vh;
  color: #fff;
  display: flex;
  padding: 80px 80px;
  align-items: center;
  // justify-content: space-between;
  gap: 50px;

  .tenure-info {
    display: flex;
    width: 600px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;

    .tenure-details {
      width: 100%;
    }
  }

  .tenure-img {
  }
`;

const Home = () => {
  return (
    <>
      <Navbar>
        <div>LOGO</div>
        <NavbarMid>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </NavbarMid>
        <NavbarButtons>
          <button>Login</button>
          <button>Get Started</button>
        </NavbarButtons>
      </Navbar>

      <HeroComponent>
        <HeroComponentInfo>
          <div className="left">
            <h1>
              Transforming the Valuation and Tendering of Mixed Tenure
              Developments
            </h1>
          </div>
          <div className="right">
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              deserunt obcaecati,{" "}
            </p>
            <div className="right-mid">
              <div>
                <input type="text" />
                <button className="sign-up-btn">Sign Up</button>
              </div>
              <div className="partitioner">
                <div className="liner"></div>
                <span>or</span>
                <div className="liner"></div>
              </div>
              <div className="sign-in-btn">
                <button>Sign In</button>
              </div>
            </div>
          </div>
        </HeroComponentInfo>
        <HeroComponentImage>
          <img src="/heroImage.png" alt="Hero section" />
        </HeroComponentImage>
      </HeroComponent>

      <AchievementsComponent>
        <LeftSection>
          <h2>Over a decade of Achievements</h2>
          <p>With our super powers we have reached this.</p>
        </LeftSection>
        <RightSection>
          <div>
            <span className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="73"
                viewBox="0 0 72 73"
                fill="none"
              >
                <circle cx="36" cy="36.5" r="36" fill="#1B3F58" />
              </svg>
            </span>
            <div className="numbers">
              <span>£ 200,000K</span>
              <span>VALUATIONS</span>
            </div>
          </div>
          <div>
            <span className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="73"
                viewBox="0 0 72 73"
                fill="none"
              >
                <circle cx="36" cy="36.5" r="36" fill="#1B3F58" />
              </svg>
            </span>
            <div className="numbers">
              <span>£ 200,000K</span>
              <span>VALUATIONS</span>
            </div>
          </div>
          <div>
            <span className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="73"
                viewBox="0 0 72 73"
                fill="none"
              >
                <circle cx="36" cy="36.5" r="36" fill="#1B3F58" />
              </svg>
            </span>
            <div className="numbers">
              <span>£ 200,000K</span>
              <span>VALUATIONS</span>
            </div>
          </div>
        </RightSection>
      </AchievementsComponent>

      <EvaluationComponent>
        <div className="left">
          <h1>We help you to Valuation & Tendering</h1>
          <div className="left-img">
            <img src="/valuationImg.png" alt="" />
          </div>
        </div>
        <div className="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, non?
          Illo eum neque praesentium suscipit voluptates dignissimos fugiat
          nulla pariatur error natus sint iste mollitia, harum fuga id dicta
          voluptas quaerat sit et facilis! Deleniti voluptate nobis, cum
          dignissimos earum culpa? Reprehenderit quidem voluptatem illo pariatur
          iste vero accusantium dignissimos.
        </div>
      </EvaluationComponent>

      <WhyIvalComponent>
        <h1>Why use Ival ?</h1>
        <div className="ival-info-container">
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
          <div className="ival-info-card">
            <span className="card-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1B3F58" />
              </svg>
            </span>
            <h3>Access to Partners</h3>
            <p>
              Over 38* Industry recognised Partners including regional and
              national (for profit and not for profit) HA's & Funds
            </p>
          </div>
        </div>
      </WhyIvalComponent>

      <VideoContainerComponent>
        <div className="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo
          eius laboriosam praesentium vitae fugiat voluptate sint facere
          officiis optio consequuntur deserunt temporibus sunt iusto placeat
          eveniet commodi totam iste ab provident, libero saepe fugit ipsa
          autem. Sunt, qui! Totam, cumque. Earum dolorum eos praesentium
          inventore hic aperiam a esse?
        </div>
        <div className="right">
          <div className="steps-container">
            <h3>Just 3 easy steps</h3>
            <div className="steps">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, voluptas.
            </div>
          </div>
          <div className="download">Download</div>
        </div>
      </VideoContainerComponent>

      <CarouselComponent>
        <div>
          <h1>Carousel here</h1>
        </div>
      </CarouselComponent>

      <PartnerComponent>
        <div className="partner-info">
          <h1>Become a partner</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            possimus accusantium incidunt quae nesciunt molestias a hic rem
            dolores sint?
          </p>
          <button>Enquire</button>
        </div>
        <div className="partner-icons">
          <img src="/partner-icon-1.png" alt="" />
          <img src="/partner-icon-1.png" alt="" />
          <img src="/partner-icon-1.png" alt="" />
          <img src="/partner-icon-1.png" alt="" />
        </div>
      </PartnerComponent>

      <LearnMoreComponent>
        <div className="tenure-info">
          <div className="tenure-details">
            <h1>Disrupting the Real Estate Industry</h1>
            <p>
              A Technology and Consultancy company like no other.
              Revolutionising the way in which Prop-Tech can help maximise
              returns for everyone in the property chain.
            </p>
          </div>
          <div className="learn-more-btn">
            <button>Learn more</button>
          </div>
        </div>
        <div className="tenure-img">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, esse.
        </div>
      </LearnMoreComponent>

      <Accordion />

      <Footer />
    </>
  );
};

export default Home;
