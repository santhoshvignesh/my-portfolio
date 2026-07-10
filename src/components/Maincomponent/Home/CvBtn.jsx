import React from "react";
import styled from "styled-components";

const Button = () => {
  const handleDownload = () => {
    window.open("./assets/Vignesh_Resume.pdf", "_blank"); // Opens in a new tab
  };

  return (
    <StyledWrapper>
      <button className="btn" onClick={handleDownload}>
        View My Resume
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    --border-color: linear-gradient(-45deg, #871cff, #7e03aa, #1778ff);
    --border-width: 0.125em;
    --curve-size: 0.5em;
    --blur: 30px;
    --bg: #871cff;
    --color: white;
    color: var(--color);
    cursor: pointer;
    position: relative;
    isolation: isolate;
    display: inline-grid;
    place-content: center;
    padding: 0.5em 1.5em;
    font-family: "Inter";
    font-weight: 400;
    font-size: 21px;
    line-height: 29px;
    border: 0;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
    clip-path: polygon(
      0% var(--curve-size),
      var(--curve-size) 0,
      100% 0,
      100% calc(100% - var(--curve-size)),
      calc(100% - var(--curve-size)) 100%,
      0 100%
    );
    transition: color 250ms;
  }

  .btn::after,
  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  .btn::before {
    background: var(--border-color);
    background-size: 300% 300%;
    animation: move-bg 5s ease infinite;
    z-index: -2;
  }

  @keyframes move-bg {
    0% {
      background-position: 31% 0%;
    }
    50% {
      background-position: 70% 100%;
    }
    100% {
      background-position: 31% 0%;
    }
  }

  .btn::after {
    background: var(--bg);
    z-index: -1;
    clip-path: polygon(
      var(--border-width) calc(var(--curve-size) + var(--border-width) * 0.5),
      calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }

  .btn:where(:hover, :focus)::after {
    clip-path: polygon(
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width))
    );
    transition: 200ms;
  }

  .btn:where(:hover, :focus) {
    color: #fff;
  }
  @media (max-width: 480px) {
    .btn {
      margin-top: 15px;
      font-size: 16px;
      padding: 0.3em 1em;
    }
  }
`;

export default Button;
