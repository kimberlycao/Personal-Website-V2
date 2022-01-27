import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AnimatedBackground from "../components/AnimatedBackground";
import ResumeButton from "../components/ResumeButton";
import profileImage from "../images/profile-image.jpg";

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
      <div className="min-h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
        <div className="mx-14 min-h-screen flex flex-col justify-center items-start">
          <div>
            <h1 className="lg:text-8xl sm:text-7xl text-5xl text-pink-400 font-roboto">
              Hi, <br /> I'm Kimberly, <br />
            </h1>
            <h1 className="lg:text-6xl sm:text-5xl text-3xl text-pink-300 font-roboto">
              {" "}
              <span ref={typedIntro}></span>{" "}
            </h1>
          </div>
          <div>
            <ResumeButton />
          </div>
        </div>
        <div className="min-h-screen flex-col justify-center items-center md:p-12 p-12 overflow-hidden flex">
          <div className="flex relative w-full max-w-lg items-center">
            <AnimatedBackground />
            <img
              className="absolute rounded-full"
              src={profileImage}
              alt="Profile"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
