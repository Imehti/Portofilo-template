import React, { useState } from "react";

const ProjectLinks = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("All articles");

  // Array of links for easier mapping
  const links = [
    "All articles",
    "Computer",
    "Electricity",
    "Mechanics",
    "Metallurgy",
    "Construction",
    "Architecture",
  ];

  return (
    <div className="p-12">
      <ul className="flex justify-evenly text-gray-700">
        {links.map((link) => (
          <li key={link}>
            <a
              href="/"
              onClick={() => setActiveLink(link)} // Update active link on click
              className={`px-4 py-2 rounded transition duration-300 ${
                activeLink === link
                  ? "bg-blue-600 text-white border border-blue-600"
                  : "hover:bg-blue-100"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;
