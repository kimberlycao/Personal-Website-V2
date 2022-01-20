import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedIntro = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedIntro.current, {
      strings: [
        "software engineer.",
        "avid hackathon go-er.",
        "Twitter enthusiast.",
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
      <div className="bg-slate-900 h-screen grid md:grid-cols-2 flex-col justify-center items-center">
        <div class="lg:text-8xl md:text-6xl sm:text-4xl text-3xl ml-12 font-roboto">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-200">
            Hi, <br /> I'm Kimberly,
          </span>
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl text-pink-200">
            {" "}
            <span ref={typedIntro}></span>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
