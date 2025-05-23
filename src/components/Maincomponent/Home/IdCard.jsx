import React from "react";
import "./IdCard.css";
import SocialContainer from "./SocialContainer";
function IdCard() {
  return (
    <div className="IDContainer">
      <div className="Icons">
        <div className="photoshop-icon">
          <img src="../../assets/icons/photoshop.png" alt="" />
        </div>
        <div className="illustrator-icon">
          <img src="../../assets/icons/illustrator.png" alt="" />
        </div>
        <div className="react-icon">
          <img src="../../assets/icons/react-icon.png" alt="" />
        </div>
        <div className="figma-icon">
          <img src="../../assets/icons/figma-icon.png" alt="" />
        </div>
      </div>
      <div className="IdCard">
        <div className="ID-Card-contents">
          <div className="PhotoFrame">
            <img
              className="myPhoto"
              src="./images/ProjectImages/myPhoto/myphoto.webp"
              alt=""
            />
          </div>
          <div className="name">
            <div className="IdCardName"> VIGNESH A</div>
          </div>
          <div className="Designer">
            <div className="role">DESIGNER</div>
          </div>
          <div className="AddressContainer">
            <div className="Address">PERAVURANI-SORNAKKADU</div>
          </div>
          <div className="Line"></div>
          <div className="SocialContainer">
            <SocialContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
