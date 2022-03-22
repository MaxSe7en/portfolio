import React from "react";
import "./WhatGPT3.css";

import Feature from "../../Components/Feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Who is Max?"
          text="Awuah Maxwell Twerefour is a self taught frontend developer with good experience in web development (React.JS, HTML, CSS, JavaScript) and mobile app development (Flutter and Android). I thrive well in work environment with little or no supervision."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Let's work together</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Goals"
          text="To be the best in whatever and wherever I find my self"
        />
        <Feature
          title="Motivation"
          text="I am self movitated, I believe in if you can do it, do it lets see. I put in the best to achieve the best performance in app I work on."
        />
        <Feature
          title="Education"
          text="A graduate in Bsc. Chemistry from one of the best universities in Ghana, Kwame Nkrumah University of Science and Technology"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
