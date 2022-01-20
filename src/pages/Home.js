import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

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
      <div className="bg-my-gray h-screen grid md:grid-cols-2 grid-cols-1 flex-col justify-center items-center">
        <div className="mx-12 h-screen flex flex-col justify-center">
          <h1 className="lg:text-8xl md:text-8xl sm:text-7xl text-5xl text-pink-400 font-roboto">
            Hi, <br /> I'm Kimberly, <br />
          </h1>
          <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl text-pink-300 font-roboto">
            {" "}
            <span ref={typedIntro}></span>{" "}
          </h1>
        </div>
        <div className="bg-blue-200 h-screen flex flex-col justify-center items-center">
          Content
        </div>
      </div>
    </>
  );
};

export default Home;
