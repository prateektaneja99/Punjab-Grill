import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="ਨਵੇਂ ਸਵਾਦਾਂ ਦੀ ਪੁੱਛ ਲਗਾਓ" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Experience the opulence of India at our fine dining restaurant, where we
        serve authentic dishes prepared with the finest ingredients and
        presented with an artistic flair. Join us for a culinary journey that
        will tantalize your taste buds and leave you craving for more.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img"></img>
    </div>
  </div>
);

export default Header;
