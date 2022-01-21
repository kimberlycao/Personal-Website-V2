import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const SkillsCloud = (props) => {
  const cloud = useRef(null);

  const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Python",
    "Java",
    "git",
    "django",
    "SQL",
    "PostgreSQL",
    "Flutter",
    "Dart",
    "Bootstrap",
    "TailwindCSS",
  ];

  useEffect(() => {
    var tagCloud = TagCloud(cloud.current, myTags, {
      radius: props.size,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });

    return () => {
      tagCloud.destroy();
    };
  }, []);
  return <span ref={cloud}></span>;
};

export default SkillsCloud;
