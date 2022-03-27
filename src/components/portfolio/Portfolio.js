import React from "react";
import "./portfolio.css";
import img1 from "../../assets/not to do list.png";
import img2 from "../../assets/react calculator.png";
import img3 from "../../assets/Contact List.png";
import img4 from "../../assets/subway counter.png";
import img5 from "../../assets/blackjack.png";
import img6 from "../../assets/color flipper.png";
import userEvent from "@testing-library/user-event";

const data = [
  {
    id: 1,
    img: img1,
    title: "Not-To-Do-List",
    github: "https://github.com/Sulav21/react-not-to-do-list",
    demo: "https://react-not-to-do-list-teal.vercel.app/",
  },
  {
    id: 2,
    img: img2,
    title: "Prank Calculator",
    github: "https://github.com/Sulav21/react-calculator",
    demo: "https://react-calculator-murex.vercel.app/",
  },
  {
    id: 3,
    img: img3,
    title: "Contact List - Random API's",
    github: "https://github.com/Sulav21/react-contact-list",
    demo: "https://react-contact-list-ten.vercel.app/",
  },
  {
    id: 4,
    img: img4,
    title: "Subway Counter",
    github: "https://github.com/Sulav21/subway-counter",
    demo: "https://sulav21.github.io/subway-counter/",
  },
  {
    id: 5,
    img: img5,
    title: "BlackJack Game",
    github: "https://github.com/Sulav21/blackJack",
    demo: "https://sulav21.github.io/blackJack/",
  },
  {
    id: 6,
    img: img6,
    title: "Color Flipper",
    github: "https://sulav21.github.io/colorFlipper/hex.html",
    demo: "https://github.com/Sulav21/colorFlipper",
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
