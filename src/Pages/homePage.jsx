import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const games = [
    {
      name: "Dota 2",
      image: "https://i.ibb.co/dpDJZ2b/1.jpg",
      link: "/d2prediction/stepper",
    },
    { name: "Stick Fight", image: "https://i.ibb.co/X7nQxgj/2.jpg" },
    { name: "Minion Masters", image: "https://i.ibb.co/FqTvB96/3.jpg" },
    { name: "KoseBoz!", image: "https://i.ibb.co/4P0CDKX/4.jpg" },
  ];

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen p-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">All Games</h2>
        <div className="flex flex-wrap gap-6">
          {games.map((game, index) => (
            <figure
              key={index}
              onClick={() => game.link && navigate(game.link)}
              className="relative w-44 h-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300 cursor-pointer">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4 text-center text-lg">
                {game.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <footer className="absolute bottom-4 right-4 text-xs text-gray-400">
        <a
          href="https://codepen.io/mrReiha/pen/RwPgLeM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 bg-gray-800 rounded-full shadow hover:bg-gray-700 transition duration-200">
          <span>Designed by</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 3v4.5M9.75 3v4.5m7.5 13.5v-10.5m-11.25 0v10.5m15.75 0H3M3 7.5h18"
            />
          </svg>
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
