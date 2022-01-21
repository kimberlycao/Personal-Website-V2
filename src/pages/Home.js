import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import ResumeButton from "../components/ResumeButton";
import { Link } from "react-router-dom";

const Home = () => {
  const typedIntro = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedIntro.current, {
      strings: [
        "software engineer.",
        "avid hackathon go-er.",
        "daily Twitter user.",
        "self-declared chef.",
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
        <div className="mx-12 h-screen flex flex-col justify-center items-start">
          <div>
            <h1 className="lg:text-8xl md:text-8xl sm:text-7xl text-5xl text-pink-400 font-roboto">
              Hi, <br /> I'm Kimberly, <br />
            </h1>
            <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-300 font-roboto">
              {" "}
              <span ref={typedIntro}></span>{" "}
            </h1>
          </div>
          <div>
            <ResumeButton />
          </div>
        </div>
        <div className="bg-blue-200 h-screen flex flex-col justify-center items-center"></div>
      </div>
    </>
  );
};

export default Home;
