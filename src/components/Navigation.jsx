import React from "react";
import AnguillaGram from "../assets/imgs/anguilla-gram.jpg";
import AnguillaFlag from "../assets/imgs/anguilla-flag.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="sticky top-0 items-center justify-between hidden px-8 py-2 bg-white border-b md:flex">
      <div>
        <Link to="/">
          <img
            className="object-cover w-auto h-12 rounded-md"
            src={AnguillaFlag}
            alt="anguilla-flag"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-1 w-full">
        <input
          type="search"
          placeholder="Search..."
          id="search-bar"
          className="w-1/4 px-4 py-2 border rounded-md outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <img
          className="object-cover w-auto h-12"
          src={AnguillaGram}
          alt="anguilla-gram"
        />

        <Link
          className="px-4 py-2 text-white rounded-md bg-cyan-600"
          to="/dashboard"
          state={{
            auth: true,
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
