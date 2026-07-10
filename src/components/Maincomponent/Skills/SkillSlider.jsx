import { useEffect } from "react";
import styled from "styled-components";
import html from "/public/assets/icons/html.png";
import css from "/public/assets/icons/CSS.png" ;
import javascript from "/public/assets/icons/javascript.png";
import react from  "/public/assets/icons/React.png";
import express from "/public/assets/icons/Express.svg";
import sql from  "/public/assets/icons/Mysql.png";
import Github from  "/public/assets/icons/GitHub.png";
import Figma from  "/public/assets/icons/figma.png";
import Illustrator from  "/public/assets/icons/Adobe-Illustrator-Icon-PNG.png";
import Photoshop from  "/public/assets/icons/Adobe-Photoshop-Icon-PNG.png";
const InfiniteScroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css},
    {
      name: "JavaScript",
      img: javascript,
    },
    { name: "React", img:react },
    {
      name: "Express.js",
      img: express,
    },
    { name: "My SQL", img: sql},
    { name: "Github", img:  Github},
    { name: "Figma", img: Figma },
    {
      name: "Illustrator",
      img: Illustrator,
    },
    {
      name: "Photoshop",
      img: Photoshop,
    },
  ];

  return (
    <StyleContainer>
      <div className="container">
        <h1 className="title"></h1>
        {/* Right Scroller */}
        <div className="scroller" data-direction="right" data-speed="slow">
          <ul className="tag-list scroller__inner">
            {skills.map((skill, index) => (
              <li key={index}>
                <img src={skill.img} alt={skill.name} className="icon" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Left Scroller */}
        <div className="scroller" data-direction="left" data-speed="slow">
          <ul className="tag-list scroller__inner">
            {skills.map((skill, index) => (
              <li key={index}>
                <img src={skill.img} alt={skill.name} className="icon" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyleContainer>
  );
};

export default InfiniteScroll;

const StyleContainer = styled.div`
  .container {
    // background-color:red;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-family: system-ui;
    font-size: 1.125rem;
    position: relative;
    top: 400px;
  }

  .scroller {
    max-width: 90vw;
    max-width: 100vw;
    overflow: hidden;
    position: relative;
  }

  .scroller__inner {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    white-space: nowrap;
  }

  .scroller[data-animated="true"] {
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  .scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s)
      var(--_animation-direction, forwards) linear infinite;
  }

  .scroller[data-direction="right"] {
    --_animation-direction: forwards;
  }

  .scroller[data-direction="left"] {
    --_animation-direction: reverse;
  }

  .scroller[data-speed="fast"] {
    --_animation-duration: 20s;
  }

  .scroller[data-speed="slow"] {
    --_animation-duration: 60s;
  }

  @keyframes scroll {
    to {
      transform: translateX(calc(-50% - 0.5rem));
    }
  }

  .tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
  }

  .tag-list li {
    box-shadow: 0px 0px 20px rgba(23, 120, 255, 0.12),
      /* Soft main shadow */ 0px 0px 10px rgba(23, 120, 255, 0.08),
      /* Subtle middle glow */ 0px 4px 6px rgba(23, 120, 255, 0.05),
      /* Light bottom lift */ 0px 2px 3px rgba(23, 120, 255, 0.03); /* Very subtle inner softness */
    color: var(--text-color);
    // color: #1778ff;
    padding: 1rem;
    background: var(--bg-color);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tag-list li .icon {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 720px) {
    .container {
      top: 800px;
    }
  }
`;
