const AnimatedHeader = (props) => {
  const str = props.word;
  return str
    .split("")
    .map((letter) => (
      <span className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl text-pink-400 font-roboto hover:animate-bounce">
        {letter}
      </span>
    ));
};

export default AnimatedHeader;
