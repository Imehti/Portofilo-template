import React from "react";


const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between m-6">
        <div className="">
          <h1 className="font-extrabold">
            Ar<span className="text-blue-800">chi</span>vi
          </h1>
        </div>
        <div className="">
          <ul className="flex space-x-10 text-gray-800">
            <li>Home</li>
            <li>Publications</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>

        <div className="w-14">
          <img src='azadlogo.jpg' alt="Azad-University" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
