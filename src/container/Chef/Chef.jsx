import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Bringing the taste of India to your kitchen with Chef Sanjeev Kapoor.
          </p>
        </div>
        <p className="p__opensans">
          Chef Sanjeev Kapoor is a renowned Indian chef, author, and television
          personality known for his expertise in Indian cuisine and his ability
          to simplify complex recipes for home cooks. He has authored numerous
          cookbooks, hosted multiple cooking shows, and is recognized as a
          leading authority on Indian cuisine both in India and internationally.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Sanjeev Kapoor</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
