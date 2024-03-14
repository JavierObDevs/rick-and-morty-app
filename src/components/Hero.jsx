import "./Hero.css";
import Atropos from 'atropos/react';


const Hero = () => {

  return (
    <main>
      <Atropos className="my-atropos">
        
        <img
          src="images\bg-z10.png"
          alt="image background"
          id="bg"
          className="bg"
          data-atropos-offset="0"
        />

        <img
          src="images\text-z9.webp"
          alt="Text Rick And Morty"
          id="text"
          className="text"
          data-atropos-offset="10"
        />

        <img
          src="images\pj-z8.png"
          alt="Rick and Morty PNG"
          id="pjs"
          className="pjs"
          data-atropos-offset="3"
        />

        <img
          src="images\clouds-1.png"
          alt="Clouds"
          className="clouds-1"
          id="clouds_2"
          data-atropos-offset="-5"
        />

        <img
          src="images\clouds-2.png"
          alt="Clouds"
          className="clouds-2"
          id="clouds_1"
          data-atropos-offset="5"
        />
        
      </Atropos>
    </main>
  );
};

export default Hero;
