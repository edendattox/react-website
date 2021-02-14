import React from "react";
import "../css/HeroSection.css";
import Card__one from "./Card__one";
import Card__two from "./Card__two";
import Card__three from "./Card__three";
import Button from "@material-ui/core/Button";
import GridList from "../components/GridList";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1 className="text-design">
          hi, i'm
          <strong className="hero-decoration"> Eden. </strong>
          i'm a full-stack web developer.
        </h1>
      </div>
      <div className="hero-image">
        <img
          src="https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?"
          alt="Img2"
          height="800px"
          width="600px"
        />
      </div>
      <div className="hero-content">
        <h1>VISUAL STORYTELLING AND DIGITAL PUBLISHING MADE EASY</h1>
        <h4>The Idea behind Pageflow</h4>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.{" "}
        </p>
        <p>
          Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus,
          lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi
          ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at
          maximus nisl suscipit posuere. Morbi nec enim nunc.
        </p>
        <span>REGISTER NOW FOR FREE</span>
        <span style={{ textDecoration: "none" }}>
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="contained"
            color="secondary"
            to="/register"
          >
            Register
          </Button>
        </span>
        <div className="cards-grid">
          <Card__one />
          <hr className="sep-3" />
          <div className="hero-section">
            <h1>EXAMPLES</h1>
            <h4>Some exciting stories, told with Pageflow</h4>
            <GridList />
          </div>
        </div>

        <div className="hero-details">
          <hr className="sep-3" id="line" />

          <div className="hero-details-text">
            <h1>EDEN</h1>
            <h4>In Detail</h4>
          </div>
          <Card__two />
        </div>
        <div className="hero-details2">
          <hr className="sep-3" id="line2" />

          <div className="hero-details-text2">
            <h1>IN PRACTICE</h1>
            <h4>HOW CAN I USE EDEN?</h4>
          </div>
          <Card__three />
        </div>
        <div className="hero-details3">
          <hr className="sep-3" id="line3" />

          <div className="hero-details-text3">
            <h1>WHO IS USING EDEN?</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
