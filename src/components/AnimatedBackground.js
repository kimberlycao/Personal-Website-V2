const AnimatedBackground = () => {
  return (
    <div>
      <div className="absolute top-0 w-80 h-80 md:w-96 md:h-96 bg-pink-300 rounded-full blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-80 h-80 md:w-96 md:h-96 bg-pink-400 rounded-full blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-28 w-80 h-80 md:w-96 md:h-96 bg-pink-500 rounded-full blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default AnimatedBackground;
