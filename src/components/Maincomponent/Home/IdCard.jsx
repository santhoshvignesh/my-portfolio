import React from "react";
import "./IdCard.css";
import myPhoto from "/public/images/ProjectImages/myPhoto/myphoto.webp";
import photoshop from "/assets/icons/photoshop.png";
import illustrator from "/assets/icons/illustrator.png";
import react_icon from "/assets/icons/react-icon.png";
import figma_icon from "/assets/icons/figma-icon.png";
import SocialContainer from "./SocialContainer";
function IdCard() {
  return (
    <div className="IDContainer">
      <div className="Icons">
        <div className="photoshop-icon">
          <img src={photoshop} alt="Photoshop" />
        </div>
        <div className="illustrator-icon">
          <img src={illustrator} alt="" />
        </div>
        <div className="react-icon">
          <img src={react_icon} alt="" />
        </div>
        <div className="figma-icon">
          <img src={figma_icon} alt="" />
        </div>
      </div>
      <div className="IdCard">
        <div className="ID-Card-contents">
          <div className="PhotoFrame">
            <img
              className="myPhoto"
              src={myPhoto}
              // src="./images/ProjectImages/myPhoto/myphoto.webp"
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
