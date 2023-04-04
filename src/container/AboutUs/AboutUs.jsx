import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section_padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      
      
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img
          src={images.spoon}
          alt="about_spoon"
          className="spoon__image"
        ></img>
        <p className="p__opensans">
          Experience the rich and diverse flavors of India/Punjab at our fine
          dining restaurant. Our passion for Punjabi cuisine is evident in every
          dish we serve, prepared with the freshest ingredients and authentic
          Indian spices. With warm hospitality and a luxurious ambiance, we
          invite you to join us on a culinary journey that celebrates the
          essence of Punjabi culture.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      
      
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img
          src={images.spoon}
          alt="about_spoon"
          className="spoon__image"
        ></img>
        <p className="p__opensans">
          Our Punjabi fine dining restaurant was founded with a passion for
          sharing the rich and vibrant culinary traditions of Punjab. Today, we
          continue our legacy of serving authentic and delicious Punjabi dishes
          in a luxurious and welcoming setting, providing our guests with an
          unforgettable dining experience that celebrates the essence of
          Punjab's culture and cuisine.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>


    </div>
  </div>
);

export default AboutUs;
