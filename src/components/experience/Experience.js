import React from "react";
import "./experience.css";
import { BsPatchCheckFill} from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience_content_icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience_content_icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience_content_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience_content_icon' />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience_content_icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <div className="experience_frontend">
            <h3>BackEnd Development</h3>
            <div className="experience_content">
              <article className="experience-details">
                <BsPatchCheckFill className='experience_content_icon' />
                <div>
                  <h4>Node.Js</h4>
                  <small className="text-light">Learning</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
