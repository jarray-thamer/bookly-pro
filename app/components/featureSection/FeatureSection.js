import {
  BlocksIcon,
  FileArchiveIcon,
  GoalIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  const features = [
    {
      icon: <GoalIcon size={52} strokeWidth={1.3} />,
      title: "Progress Tracking",
      description: "Keep track of your reading progress and achievements.",
    },
    {
      icon: <FileArchiveIcon size={52} strokeWidth={1.3} />,
      title: "Automatic Archiving",
      description: "Automatically archive your highlights and notes.",
    },
    {
      icon: <UsersRoundIcon size={52} strokeWidth={1.3} />,
      title: "Public Outreach",
      description: "Engage with a community of readers & share your insights.",
    },
    {
      icon: <BlocksIcon size={52} strokeWidth={1.3} />,
      title: "Seamless Integration",
      description:
        "Integrate with your favorite reading platforms effortlessly.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0  lg:py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 tracking-wide ">
        <span className="bg-[#d0f732] py-2 px-4 rounded-full inline-block -rotate-6 mr-1">
          ProBook
        </span>
        makes reading more
        <br /> exciting for everyone
      </h2>
      <p className="text-md text-gray-600 mt-6 leading-6 text-center max-w-3xl ">
        Personalize your settings, follow your progress, archive your highlights
        and notes automatically:
        <br />
        ProBook is the ultimate reading hub grow your wings
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {features.map((feature, idx) => {
          return (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
