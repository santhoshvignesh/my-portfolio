import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="role-card">
        <div className="loader">
          <p className="Ima">And I’m a </p>
          <div className="words">
            <span className="word">Graphic Designer</span>
            <span className="word">UI/UX Designer</span>
            <span className="word">Full-Stack Developer</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    gap: 10px;
    font-weight: 500;
    font-size: 30px;
    color: var(--secondary-color);
  }

  .Ima {
    font-size: 50px;
    font-weight: 400;
    margin: 0;
  }

  .words {
    overflow: hidden;
    position: relative;
    height: 61px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .word {
    font-size: 50px;
    font-weight: 500;
    background: linear-gradient(90deg, #1778ff, #871cff, #1778ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    animation: spin 10s infinite ease-in-out;
  }

  @keyframes spin {
    0%,
    25% {
      transform: translateY(0%);
    }
    35%,
    60% {
      transform: translateY(-100%);
    }
    70%,
    95% {
      transform: translateY(-200%);
    }
    100% {
      transform: translateY(-300%);
    }
  }

  @media (max-width: 768px) {
    .loader {
      display: flex;
      flex-direction: column;
      font-size: 30px;
    }
    .Ima {
      margin: -0px;
      font-weight: bold;
    }
    .word {
      font-weight: bold;
      font-size: 30px;
    }
    .words {
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    .Ima {
      font-size: 30px;
    }
    .word {
      font-size: 35px;
    }
    .words {
      height: 39px;
    }
  }
`;

export default Loader;
