import React from "react";
import AnguillaGram from "../assets/imgs/anguilla-gram.jpg";
import AnguillaFlag from "../assets/imgs/anguilla-flag.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="md:flex hidden px-8 sticky top-0 bg-white py-2 border-b items-center justify-between">
      <div>
        <Link to="/">
          <img
            className="h-12 w-auto rounded-md object-cover"
            src={AnguillaFlag}
            alt="anguilla-flag"
          />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center w-full">
        <input
          type="search"
          placeholder="Search..."
          id="search-bar"
          className="px-4 py-2 w-1/4 rounded-md outline-none border"
        />
      </div>
      <div>
        <img
          className="h-12 w-auto object-cover"
          src={AnguillaGram}
          alt="anguilla-gram"
        />
      </div>
    </nav>
  );
};

export default Navigation;
