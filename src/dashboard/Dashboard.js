import React from "react";
import "./dashboard.css";
// import { Link } from "react-router-dom";
import { AiFillMobile, AiOutlineDesktop } from "react-icons/ai";
import Image from "../image/alamin.png";
import MealManager from "../image/mealManager.PNG";
import Ecommerce from "../image/ecommerce.PNG";
import enosis from "../image/enosis.PNG";
// import English from "../image/english.PNG";
import GVIMAGE from "../image/gv.PNG";
import MICPLE from "../image/micple.PNG";
import AMAR_BORNOMALA from "../image/amar_bornomala.PNG";
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
                                    href="https://doc-00-3k-docs.googleusercontent.com/docs/securesc/cvbgbg8qeik757ojdj333f0ukvtttmt8/mhi62trdk3h0ia1vges56g57p6o4sg0i/1680933825000/07520850749602447737/07520850749602447737/123nZKwQSHe4P5nOEBbJX4UKHtqEMuzFl?e=download&ax=ALy03A7gRd4ZXWLybdiDfGK20jp4HnRiffy544qoQkGlimQYocD5GEIdNGeMT0dI9KzOpw1UFxEQBiYtiAEP1A79dm3vErMCBAngWIf-LuNUSQTYg1K6Csf_KhJtckBGO27NubZOtV8eTKjJthAn0TgHaPK6iTNWvfl8bHiaRgc_PfEfuQ7QixewBZXfsIRuHGPhqun_B-QeEiHZxgsu9dfaxNsTdV6Jd-7QBoWq1xw0HPGD7D0_bxTNw4i31kT3_47gl0X7T3JcNOaSlpfaXYoH-kKPDA_Ru_STb1NrQ7uvjZIXtXguzf9KNN9E0T6DtQl9bYIZZeDjP2eCpMtfD2tFpaNgIiHKRHAqqngX2XERaj3SwV3L3rGQp4neGOPl5PWhzSunguM6rkSpVuE4aoZNB2T6RxzW-SnlXFv_eqFUsXO_dkT8C2qIegiu2zDWvLVoxGzdWnXU_J69SxJacZLr4SCmuhsw_RcvM6vWhRJxktYud_sqYO4F4jLttf9wJWYoGxc4cALc5V3YRiJM7jIobqQfTgag1K28wO3WNrKglxTbnvHs4Gtr7tOvb6i21vmwWPd_P8CHjeISIqyP5Y8HgPGyrD5fvjEkFbEZ8Xu2ZYtBTdSZEJ2XVGW_noei_6mf_k6t5qi_XuXE-Q52KpkHD7F7PZv2rZe9CJQvMnilNTRKHDOtDHXVH10PsSdzUr7qGNfB_HcXzPpm-AIVgsQ1mkPFWm1JLuvwHbZ1uAmrweXncSbAN7cwo1hX2knEsiOPOzjCWBeSPAYcXaCgdVbINrxJqbAh_4P4oagWnJPm9CHs__VU9mjtmg7P-9niV1NpTEf0FK9NrZMque2Fn2vM539dATBzZ7XE_WOLIYgNIlpQJ1hN2isC7xeIdeOIYaQ&uuid=dcdb1915-4bc3-4d75-bde9-f751a228bf9e&authuser=0"
                                    type="button"
                                    class="custom-button"
                                    style={{ textDecoration: "none" }}
                                >
                                    <BiArrowToBottom
                                        size={20}
                                        style={{ margin: "0 5px" }}
                                    />
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
                                Experience in Web, Mobile apps development.
                                Responsive UI development by using React Js +
                                React Context API, React native + React Context
                                Api, Express Js, Node Js, MySql, Mongodb.
                                Advanced Analytical skills, in-depth knowledge
                                of Software Development Life Cycle.{" "}
                            </p>
                            <p>
                                I can develop any website and mobile application
                                using React and React-Native.I knowing some
                                framework for the frontend and the backend,
                                basically a MERN developer. I always focus on
                                learning new technology.
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
                                    <p style={{ minHeight: "300px" }}>
                                        As a React Native developer with over 3
                                        years of experience, I have a deep
                                        understanding of the platform's core
                                        concepts and architecture. Throughout my
                                        journey, I have encountered and solved
                                        many common challenges, such as
                                        optimizing app performance, handling
                                        data management, and integrating
                                        third-party libraries. My experience has
                                        allowed me to create dynamic and robust
                                        mobile applications for iOS and Android
                                        platforms, incorporating advanced
                                        features such as push notifications,
                                        real-time updates, and location-based
                                        services.
                                    </p>
                                </div>
                                <div className="services-section">
                                    <AiOutlineDesktop size={50} />
                                    <h3>Web Development</h3>
                                    <p style={{ minHeight: "300px", overflow: 'hidden' }}>
                                        I am a web developer with a passion for
                                        creating user-friendly and intuitive web
                                        applications using React. With over some
                                        years of experience in the field, I have
                                        honed my skills in developing robust and
                                        scalable front-end solutions for various
                                        businesses. Throughout my career, I have
                                        worked on numerous projects ranging from
                                        small startups to large enterprise-level
                                        applications. My expertise in React has
                                        allowed me to develop highly responsive
                                        and interactive user interfaces that
                                        have received high praise from clients
                                        and end-users alike.
                                    </p>
                                </div>
                                <div className="services-section">
                                    <GrDeploy size={50} />
                                    <h3>Deploy Applications</h3>
                                    <p style={{ height: "300px",  overflow: 'hidden' }}>
                                        As someone with three years of
                                        experience in deploying web applications
                                        and uploading mobile applications on
                                        Google Play and the App Store, I have
                                        developed a strong understanding of the
                                        software development lifecycle and the
                                        technical skills required to
                                        successfully release a product to
                                        market. When it comes to mobile
                                        applications, I have a deep
                                        understanding of the requirements for
                                        submitting an app to both the App Store
                                        and Google Play, including knowledge of
                                        the submission guidelines and review
                                        process. I have experience with various
                                        mobile app development frameworks,
                                        including React Native and Flutter, and
                                        have used tools such as Xcode and
                                        Android Studio to build and test
                                        applications.
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
                                <div className="single-project">
                                    <div>
                                        <img src={GVIMAGE} />
                                    </div>
                                    <div className="project-description">
                                        <h3>Web Application</h3>
                                        <br />
                                        <br />
                                        <p>
                                            Global Village (UK E-Learning
                                            Platform) • This is an E-Learning
                                            platform where student can grow
                                            their skills by perform quiz,
                                            participate online exam, learn a
                                            specific topic by animation
                                            visualization, Drag-Drop question
                                            and many more. More than 5 role
                                            basis web/mobile application for
                                            Teacher/parent’s/student’s/super-admin/school-admin.
                                        </p>
                                        <p>USED STACK:</p>
                                        <p className="container_project_tag">
                                            <span className="project-tag">
                                                NextJs
                                            </span>
                                            <span className="project-tag">
                                                React
                                            </span>
                                            <span className="project-tag">
                                                MySql
                                            </span>{" "}
                                            <span className="project-tag">
                                                Laravel
                                            </span>
                                            <span className="project-tag">
                                                AWS
                                            </span>
                                        </p>
                                        <br />
                                        <br />
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://stage-front.mylearning101.co.uk/home"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-project">
                                    <div>
                                        <img src={MICPLE} />
                                    </div>
                                    <div className="project-description">
                                        <h3>Mobile Application</h3>
                                        <br />
                                        <br />
                                        <p>
                                            Micple offers encrypted and
                                            self-destructs chats, voice
                                            messages, and video calls that are
                                            private. Generate some searching
                                            algorithm, facebook story, video,
                                            friend suggestion algorithm by using
                                            Data-structures and algorithm
                                            concept. Real time messaging, like,
                                            comment, share, push-notification
                                            features using socket.io/client
                                        </p>
                                        <p>USED STACK:</p>
                                        <p className="container_project_tag">
                                            <span className="project-tag">
                                                React-Native
                                            </span>{" "}
                                            <span className="project-tag">
                                                NodeJS
                                            </span>
                                            <span className="project-tag">
                                                MongoDB
                                            </span>{" "}
                                            <span className="project-tag">
                                                React-Navigation
                                            </span>
                                            <span className="project-tag">
                                                ExpressJS
                                            </span>{" "}
                                            <span className="project-tag">
                                                Native Elements
                                            </span>
                                            <span className="project-tag">
                                                Socket-Io-Client
                                            </span>
                                        </p>
                                        <br />
                                        <br />
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://play.google.com/store/apps/details?id=com.micple&hl=en&gl=US"
                                            >
                                                Play Store
                                            </a>
                                            &nbsp; &nbsp;
                                            <a
                                                target="_blank"
                                                href="https://apps.apple.com/us/app/micple/id6873965874"
                                            >
                                                App Store
                                            </a>
                                        </div>
                                    </div>
                                </div>

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
                                            Meal Manager is an online based
                                            mobile application which will help
                                            you to track your day to day meals
                                            and all mess expenses and to split
                                            and share the expenses within the
                                            mess members. It‘s already 1000+
                                            times downloaded. This is
                                            react-native base application.
                                        </p>
                                        <p>USED STACK:</p>
                                        <p className="container_project_tag">
                                            <span className="project-tag">
                                                React-Native
                                            </span>{" "}
                                            <span className="project-tag">
                                                {" "}
                                                JSX
                                            </span>
                                            <span className="project-tag">
                                                Javascript
                                            </span>{" "}
                                            <span className="project-tag">
                                                React-Navigation
                                            </span>
                                            <span className="project-tag">
                                                MySql
                                            </span>{" "}
                                            <span className="project-tag">
                                                Node Js
                                            </span>
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
                                            This is a basically E-commerce web
                                            application With Authentication
                                            base. This is React Js base
                                            application.
                                        </p>
                                        <p>USED STACK:</p>
                                        <p className="container_project_tag">
                                            <span className="project-tag">
                                                React Js
                                            </span>{" "}
                                            <span className="project-tag">
                                                {" "}
                                                JSX
                                            </span>
                                            <span className="project-tag">
                                                Javascript
                                            </span>{" "}
                                            <span className="project-tag">
                                                React-Router
                                            </span>
                                            <span className="project-tag">
                                                MySql
                                            </span>{" "}
                                            <span className="project-tag">
                                                Node Js
                                            </span>
                                        </p>
                                        <br />
                                        <br />
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://alamin-ecommerce.herokuapp.com/"
                                                rel="noreferrer"
                                            >
                                                Live Demo
                                            </a>
                                            &nbsp; &nbsp;
                                            <a
                                                target="_blank"
                                                href="https://github.com/AlaminPu1007/React-ECommerce"
                                                rel="noreferrer"
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
                                        {/*eslint-disable-next-line jsx-a11y/alt-text*/}
                                        <img src={enosis} />
                                    </div>
                                    <div className="project-description">
                                        <h3>Mobile Application</h3>
                                        <br />
                                        <br />
                                        <p>
                                            This is a CRM base application. #key
                                            Features: 1)graph view of data
                                            2)pagination 3)localization 4)dark
                                            mode and many more
                                        </p>
                                        <p>USED STACK:</p>
                                        <p className="container_project_tag">
                                            <span className="project-tag">
                                                React-Native
                                            </span>{" "}
                                            <span className="project-tag">
                                                {" "}
                                                JSX
                                            </span>
                                            <span className="project-tag">
                                                Javascript
                                            </span>{" "}
                                            <span className="project-tag">
                                                React-Navigation
                                            </span>
                                            <span className="project-tag">
                                                localization
                                            </span>{" "}
                                            <span className="project-tag">
                                                SVG
                                            </span>
                                        </p>
                                        <br />
                                        <br />
                                        <div>
                                            <a
                                                rel="noreferrer"
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
                                        {/*eslint-disable-next-line jsx-a11y/alt-text*/}
                                        <img src={AMAR_BORNOMALA} />
                                    </div>
                                    <div className="project-description">
                                        <h3>Mobile Application</h3>
                                        <br />
                                        <br />
                                        <p>
                                            The purpose of this application is,
                                            kids can learn basic alphabet (like,
                                            bangla Sarborno,
                                            Banjonborno,numbers, Arabic, English
                                            letter) with their given music.
                                        </p>
                                        <p>USED STACK:</p>
                                        <p className="container_project_tag">
                                            <span className="project-tag">
                                                React-Native
                                            </span>{" "}
                                            <span className="project-tag">
                                                {" "}
                                                JSX
                                            </span>
                                            <span className="project-tag">
                                                Javascript
                                            </span>{" "}
                                            <span className="project-tag">
                                                React-Navigation
                                            </span>
                                            <span className="project-tag">
                                                React-Native-Sound
                                            </span>
                                        </p>
                                        <br />
                                        <br />
                                        <div>
                                            <a
                                                target="_blank"
                                                href="https://play.google.com/store/apps/details?id=com.esho_sikhi"
                                                rel="noreferrer"
                                            >
                                                Play Store
                                            </a>
                                            {/* &nbsp; &nbsp;
                                            <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href="https://github.com/AlaminPu1007/Esho_Sikhi"
                                            >
                                                Source Code
                                            </a> */}
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
