import React from "react";
import Chef from "./Chef";

const ChefSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
      <h2 className="mb-12 font-bold text-4xl md:text-6xl text-center">
        Top Chines Chef
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Chef />
      </div>
    </div>
  );
};

export default ChefSection;
