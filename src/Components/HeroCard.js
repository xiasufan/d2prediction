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
      className="bg-gray-700 rounded-lg p-4 w-32 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      onClick={handleCardClick}>
      <img
        src={imageSrc}
        alt={displayName}
        className="w-full h-auto mb-2 rounded-md"
        style={{ objectFit: "cover" }}
      />
      <h3 className="text-white font-semibold">{displayName}</h3>
    </div>
  );
};

export default HeroCard;
