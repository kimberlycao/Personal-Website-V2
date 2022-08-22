import React from "react";
import { Link } from "react-router-dom";
import AnimatedHeader from "../components/AnimatedHeader";
import SkillsCloud from "../components/SkillsCloud";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
        <div className="min-h-screen flex flex-col justify-center items-center mx-16">
          <div>
            <div className="pb-6 flex">
              <AnimatedHeader word={"Who"} />
              <span className="w-3" />
              <AnimatedHeader word={"Am"} />
              <span className="w-3" />
              <AnimatedHeader word={"I"} />
            </div>
            <p className="font-source text-white lg:text-lg sm:text-md">
              Hi there! My name is Kimberly and I'm a University of Toronto
              alumni. I studied computer science and statistics in university -
              the perfect combination to compliment my interest in machine
              learning.
              <br />
              <br />I enjoy attending hackathons and am always looking for ways
              to add to my skillset. I'm currently practicing Express and Node.
              <br />
              <br />
              Outside of programming, my hobbies include baking, hiking,
              paddling and watching reruns of The Office. I also enjoy playing
              Tetris and Teamfight Tactics.
            </p>
            <div className="text-pink-400 pt-6 font-source lg:text-lg sm:text-md">
              <Link to="/projects">Check out my projects!</Link>
            </div>
          </div>
        </div>
        <div className="text-white font-bold font-source min-h-screen w-full hidden flex-col justify-center items-center md:flex">
          <SkillsCloud />
        </div>
      </div>
    </>
  );
};

export default About;
