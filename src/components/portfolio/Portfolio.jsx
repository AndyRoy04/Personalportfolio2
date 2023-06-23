import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com/AndyRoy04',
      demo: '#',
      id: 1,
      title:'Project 1'
    },
    {
      image : img2,
      github: 'https://github.com/AndyRoy04',
      demo: '#',
      id: 2,
      title:'Project 2'
    },
    {
      image : img3,
      github: 'https://github.com/AndyRoy04',
      demo: '#',
      id: 4,
      title:'Project 4'
    },
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2 className="header_two">Projects</h2>
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
