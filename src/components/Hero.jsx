import "./Hero.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import UseParallax from '../hooks/UseParallax';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  

  const box = useRef();

  useGSAP(() => {
    gsap.to(".bg", {
      ScrollTrigger: {
        scrub: 3,
      },
      scale: 1.1,
    });

    gsap.to(".clouds-1", {
      ScrollTrigger: {
        scrub: 3,
      },
      x: 300,
    });
  }, { scope: box});

  return (
    <main>
      <section ref={box}>
        <img
          src="images\bg-z10.png"
          alt="image background"
          id="bg"
          className="bg"
        />
        <img
          src="images\text-z9.webp"
          alt="Text Rick And Morty"
          id="text"
          className="text"
        />
        <img
          src="images\pj-z8.png"
          alt="Rick and Morty PNG"
          id="pjs"
          className="pjs"
        />
        <img
          src="images\clouds-1.png"
          alt="Clouds"
          className="clouds-1"
          id="clouds_2"
        />
        <img
          src="images\clouds-2.png"
          alt="Clouds"
          className="clouds-2"
          id="clouds_1"
        />
      </section>
    </main>
  );
};

export default Hero;
