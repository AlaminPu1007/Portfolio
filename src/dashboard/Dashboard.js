import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { AiFillMobile, AiOutlineDesktop } from "react-icons/ai";
import Image from "../image/alamin.png";
import MealManager from "../image/mealManager.PNG";
import Ecommerce from "../image/ecommerce.PNG";
import enosis from "../image/enosis.PNG";
import English from "../image/english.PNG";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BiArrowToBottom } from "react-icons/bi";
import { GrDeploy } from "react-icons/gr";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header component */}
      <Header />
      {/* Header component */}
      <header className="heder-container">
        <div className="body-container">
          {/* Image with myself */}
          <div className="image-container">
            <div className="image-div">
              <img src={Image} className="image-style" />
            </div>
            <div className="personal-info">
              <div className="name-designation">
                <h1>Md. Al Amin</h1>
                <h3>Web and Mobile application developer</h3>
              </div>
              <div className="email-phone">
                <a href="tel:+880-1986221266">
                  <p>PHONE : +880-1986221266</p>
                </a>
                <a href="mailto:alamin66.sit@gmail.com">
                  <p>EMAIL : alamin66.sit@gmail.com</p>
                </a>
                <a
                  href="http://maps.google.com/?q=1200 Mirpur-1, Dhaka-1216"
                  target="_blank"
                >
                  <p>ADDRESS : Mirpur-1, Dhaka-1216</p>
                </a>

                <p>EDUCATION : BSc in CSE</p>
              </div>
              <div className="social-icon">
                <a
                  target="_blank"
                  href="https://github.com/AlaminPu1007?tab=repositories"
                >
                  <AiFillGithub size={25} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-al-amin-b12104162/"
                >
                  <AiFillLinkedin size={25} />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100008389202824"
                >
                  <AiFillFacebook size={25} />
                </a>
              </div>
              <div className="button-style">
                <a
                  href="https://drive.google.com/u/0/uc?id=1uKtTkKzV2KPuyfD83an903HEgrBV8CKp&export=download"
                  type="button"
                  class="custom-button"
                  style={{ textDecoration: "none" }}
                >
                  <BiArrowToBottom size={20} style={{ margin: "0 5px" }} />
                  Resume
                </a>
              </div>
            </div>
          </div>
          {/* Image with myself */}
        </div>
      </header>
      {/* main part start form here */}
      <main>
        <div className="main-container">
          <div className="main-body-container">
            {/* About my self */}
            <div id="portfolio-about" className="myself-about">
              <p style={{ fontWeight: "500" }}>Hi</p>
              <p>I am web and mobile application developer.</p>
              <p>
                Experience in Web, Mobile apps development. Responsive UI
                development by using React Js + React Context API, React native
                + React Context Api, Express Js, Node Js, MySql, Mongodb.
                Advanced Analytical skills, in-depth knowledge of Software
                Development Life Cycle.{" "}
              </p>
              <p>
                I can develop any website and mobile application using React and
                React-Native.I knowing some framework for the frontend and the
                backend, basically a MERN developer. I always focus on learning
                new technology.
              </p>
            </div>
            {/* About my self */}
            {/* My Services */}
            <br />
            <div id="portfolio-services">
              <h3>My Services</h3>
              <div className="services-container">
                <div className="services-section">
                  <div className="icon-style">
                    <AiFillMobile size={50} />
                  </div>

                  <h3>Mobile Development</h3>
                  <p>
                    I am a expert in web design.I can add functionality besides
                    designing a web page.I can use HTML,CSS,Bootstrap, Vanilla
                    Js,React JS for it.You can see some of my portfolio tab in
                    this website
                  </p>
                </div>
                <div className="services-section">
                  <AiOutlineDesktop size={50} />
                  <h3>Web Development</h3>
                  <p>
                    I am a expert in web design.I can add functionality besides
                    designing a web page.I can use HTML,CSS,Bootstrap, Vanilla
                    Js,React JS for it.You can see some of my portfolio tab in
                    this website
                  </p>
                </div>
                <div className="services-section">
                  <GrDeploy size={50} />
                  <h3>Deploy Applications</h3>
                  <p>
                    I am a expert in web design.I can add functionality besides
                    designing a web page.I can use HTML,CSS,Bootstrap, Vanilla
                    Js,React JS for it.You can see some of my portfolio tab in
                    this website
                  </p>
                </div>
              </div>
            </div>
            {/* My Services */}
            <br />
            {/* My portfolio */}
            <div id="portfolio-projects">
              <h1>My projects</h1>

              {/* All projects */}
              <div className="my-projects">
                {/* single project render */}
                <div className="single-project">
                  <div>
                    <img src={MealManager} />
                  </div>
                  <div className="project-description">
                    <h3>Mobile Application</h3>
                    <br />
                    <br />
                    <p>
                      Meal Manager is an online based mobile application which
                      will help you to track your day to day meals and all mess
                      expenses and to split and share the expenses within the
                      mess members. It‘s already 1000+ times downloaded. This is
                      react-native base application.
                    </p>
                    <p>USED STACK:</p>
                    <p className="container_project_tag">
                      <span className="project-tag">React-Native</span>{" "}
                      <span className="project-tag"> JSX</span>
                      <span className="project-tag">Javascript</span>{" "}
                      <span className="project-tag">React-Navigation</span>
                      <span className="project-tag">MySql</span>{" "}
                      <span className="project-tag">Node Js</span>
                    </p>
                    <br />
                    <br />
                    <div>
                      <a
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.messmanager"
                      >
                        Play Store
                      </a>
                      &nbsp; &nbsp;
                      <a
                        target="_blank"
                        href="https://github.com/AlaminPu1007/Meal-Manager"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* single project render */}
                {/* single project render */}
                <div className="single-project">
                  <div>
                    <img src={Ecommerce} />
                  </div>
                  <div className="project-description">
                    <h3>Web Application</h3>
                    <br />
                    <br />
                    <p>
                      This is a basically E-commerce web application With
                      Authentication base. This is React Js base application.
                    </p>
                    <p>USED STACK:</p>
                    <p className="container_project_tag">
                      <span className="project-tag">React Js</span>{" "}
                      <span className="project-tag"> JSX</span>
                      <span className="project-tag">Javascript</span>{" "}
                      <span className="project-tag">React-Router</span>
                      <span className="project-tag">MySql</span>{" "}
                      <span className="project-tag">Node Js</span>
                    </p>
                    <br />
                    <br />
                    <div>
                      <a
                        target="_blank"
                        href="https://alamin-ecommerce.herokuapp.com/"
                      >
                        Live Demo
                      </a>
                      &nbsp; &nbsp;
                      <a
                        target="_blank"
                        href="https://github.com/AlaminPu1007/React-ECommerce"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* single project render */}
                {/* single project render */}
                <div className="single-project">
                  <div>
                    <img src={enosis} />
                  </div>
                  <div className="project-description">
                    <h3>Mobile Application</h3>
                    <br />
                    <br />
                    <p>
                      This is a CRM base application. #key Features: 1)graph
                      view of data 2)pagination 3)localization 4)dark mode and
                      many more
                    </p>
                    <p>USED STACK:</p>
                    <p className="container_project_tag">
                      <span className="project-tag">React-Native</span>{" "}
                      <span className="project-tag"> JSX</span>
                      <span className="project-tag">Javascript</span>{" "}
                      <span className="project-tag">React-Navigation</span>
                      <span className="project-tag">localization</span>{" "}
                      <span className="project-tag">SVG</span>
                    </p>
                    <br />
                    <br />
                    <div>
                      <a
                        target="_blank"
                        href="https://github.com/AlaminPu1007/Enosis-Crm"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* single project render */}
                {/* single project render */}
                <div className="single-project">
                  <div>
                    <img src={English} />
                  </div>
                  <div className="project-description">
                    <h3>Mobile Application</h3>
                    <br />
                    <br />
                    <p>
                      The purpose of this application is, kids can learn basic
                      alphabet (like, bangla Sarborno, Banjonborno,numbers,
                      Arabic, English letter) with their given music.
                    </p>
                    <p>USED STACK:</p>
                    <p className="container_project_tag">
                      <span className="project-tag">React-Native</span>{" "}
                      <span className="project-tag"> JSX</span>
                      <span className="project-tag">Javascript</span>{" "}
                      <span className="project-tag">React-Navigation</span>
                      <span className="project-tag">React-Native-Sound</span>
                    </p>
                    <br />
                    <br />
                    <div>
                      <a
                        target="_blank"
                        href="https://github.com/AlaminPu1007/Esho_Sikhi"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* single project render */}
              </div>
            </div>
            {/* My portfolio */}
          </div>
        </div>
      </main>
      <footer id="portfolio-contact">
        <h1>Get in touch</h1>
      </footer>
      {/* end of main part */}
    </div>
  );
};

export default Dashboard;
