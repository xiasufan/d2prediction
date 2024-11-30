import React from "react";

const HeroCard = ({ heroName, displayName, heroId }) => {
  const imageName = heroName.replace("npc_dota_hero_", "").toLowerCase();
  const imageSrc = `/d2prediction/images/${imageName}_vert.jpg`;

  const handleCardClick = () => {
    window.open(
      `https://stratz.com/heroes/${heroId}-${displayName.replace(" ", "-")}`
    );
  };

  return (
    <div
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg p-4 w-full md:w-36 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r border-2 border-gray-600 hover:border-indigo-400"
      onClick={handleCardClick}>
      <div className="relative w-full h-32 mb-3 overflow-hidden rounded-md shadow-lg">
        <img
          src={imageSrc}
          alt={displayName}
          className="object-cover w-full h-full rounded-lg transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <h3 className="text-white font-semibold text-sm mt-2">{displayName}</h3>
    </div>
  );
};

export default HeroCard;
