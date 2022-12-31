// @ts-check
import React from "react";

import Courses from "./Courses";
import Headline from "./Headline";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-4 py-4 pl-0 ml-0 bg-amber-50 border-orange-200 border-2 rounded-lg">
        <div className="px-2 mx-2">
          <Headline />
        </div>
      </div>
      <div className="my-4 py-4 pl-0 ml-0">
        <Skills />
      </div>
      <div className="my-4 py-4 pl-0 ml-0 bg-cyan-50 border-blue-200 border-2 rounded-lg">
        <div className="px-2 mx-2">
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default Home;