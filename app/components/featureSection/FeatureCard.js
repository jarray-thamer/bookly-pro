import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-20 pt-12 p-6 pl-8  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {icon}
      <div className="mt-auto space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className=" text-base text-grey">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
