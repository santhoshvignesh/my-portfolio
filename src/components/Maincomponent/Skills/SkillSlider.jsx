import { useEffect } from "react";
import styled from "styled-components";

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
    { name: "HTML", img: "../../assets/icons/html.png" },
    { name: "CSS", img: "../../assets/icons/CSS.png" },
    { name: "JavaScript", img: "../../assets/icons/javascript.png" },
    { name: "React", img: "../../assets/icons/React.png" },
    { name: "Express.js", img: "../../assets/icons/Express.svg" },
    { name: "My SQL", img: "../../assets/icons/Mysql.png" },
    { name: "Github", img: "../../assets/icons/GitHub.png" },
    { name: "Figma", img: "../../assets/icons/figma.png" },
    {
      name: "Illustrator",
      img: "../../assets/icons/Adobe-Illustrator-Icon-PNG.png",
    },
    {
      name: "Photoshop",
      img: "../../assets/icons/Adobe-Photoshop-Icon-PNG.png",
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
