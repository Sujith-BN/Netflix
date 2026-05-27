import React from "react";

const BackgroundMovieTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-r from-black via-black/70 to-transparent z-20 flex flex-col justify-center px-4 md:px-10 lg:px-16">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white w-full md:w-2/3 lg:w-1/2 leading-tight">
        {title}
      </h1>

      <p className="text-sm md:text-lg text-gray-200 w-full md:w-2/3 lg:w-1/3 leading-6 md:leading-7 mt-4">
        {overview}
      </p>

      <div className="flex gap-4 mt-6 flex-wrap">
        <button className="bg-white text-black px-9 md:px-12 py-2 md:py-3 rounded-md text-sm md:text-lg font-bold hover:bg-gray-300">
          Play
        </button>

        <button className="bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-lg font-bold hover:bg-gray-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default BackgroundMovieTitle;
