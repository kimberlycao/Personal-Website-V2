import React from "react";
import { Link } from "react-router-dom";
import SkillsCloud from "../components/SkillsCloud";

const About = () => {
  return (
    <>
      <div className="h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
        <div className="mx-12 h-screen flex flex-col justify-center">
          <div className="p-12">
            <div className="pb-6 flex">
              <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto hover:animate-bounce">
                W
              </span>
              <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto hover:animate-bounce">
                h
              </span>
              <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto pr-4 hover:animate-bounce">
                o
              </span>
              <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto pr-4 hover:animate-bounce">
                I
              </span>
              <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto hover:animate-bounce">
                A
              </span>
              <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto hover:animate-bounce">
                m
              </span>
            </div>
            <p className="font-source text-white lg:text-xl md:text-xl sm:text-lg text-lg">
              Hi there! My name is Kimberly and I'm a final year student at the
              University of Toronto and this year's UTM Robotics' projects
              coordinator.
              <br />
              <br />I enjoy attending hackathons and am always looking for ways
              to add to my skillset. Currently, I'm learning C and expanding my
              knowledge in deep learning and neural networks. I'm also working
              on a few projects in my spare time!
              <br />
              <br />
              Outside of programming, my hobbies include baking, hiking and
              watching reruns of The Office. I also enjoy playing Tetris and
              Teamfight Tactics.
            </p>
            <div className="text-pink-400 pt-6 font-source lg:text-xl md:text-xl sm:text-lg text-lg">
              <Link to="/projects">Check out my projects!</Link>
            </div>
          </div>
        </div>
        <div className="bg-my-gray text-white font-bold h-screen flex flex-col justify-center items-center">
          <SkillsCloud />
        </div>
      </div>
    </>
  );
};

export default About;
