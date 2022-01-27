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
