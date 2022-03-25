import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";
import userEvent from "@testing-library/user-event";

const data = [
  {
    id: 1,
    img: img1,
    title: "This is my portfolio",
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 2,
    img: img2,
    title: "This is my portfolio",
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 3,
    img: img3,
    title: "This is my portfolio",
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 4,
    img: img4,
    title: "This is my portfolio",
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 5,
    img: img5,
    title: "This is my portfolio",
    github: "https://github.com",
    demo: "#",
  },
  {
    id: 6,
    img: img6,
    title: "This is my portfolio",
    github: "https://github.com",
    demo: "#",
  },
];

export const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map((user)=>(
          <article key={user.id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={user.img} alt="" />
            </div>
            <h3>{user.title}</h3>
            <div className="portfolio_item_btn">
              <a href={user.github} className="btn" target="_blank">
                Github
              </a>
              <a href={user.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
