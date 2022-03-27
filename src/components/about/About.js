import React from "react";
import "./about.css";
import image from "../../assets/about_me3.jpg";
import { FaAward } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6 months at Dented Code</small>
            </article>
          
          
            <article className="about_card">
              <RiServiceLine className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>
            </article>
          
          
            <article className="about_card">
              <BsCodeSlash className="about_icon" />
              <h5>Skills</h5>
              <small>FrontEnd / BackEnd Development</small>
            </article>
            </div>
          <p style={{textAlign:'center'}}>
           I am a Front-End Developer with serious passion for designing, creating engaging and dynamic user experience contents or in general 'CODING'. 
           Also, currently in learning about behind the scenes(BackEnd Development) to well established myself as a Full Stack Mern Developer. 
           <br/>
           <br/>
           Let's create something big. 
          </p>
          <div className="change_btn">
          <a href="#contact" className=" btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};
