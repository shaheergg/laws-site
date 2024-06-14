import React from "react";
import AnguillaGram from "../assets/imgs/anguilla-gram.jpg";
import AnguillaFlag from "../assets/imgs/anguilla-flag.png";
import { Link } from "react-router-dom";
const MobileNav = ({ setOpen }) => {
  return (
    <nav className="flex md:hidden px-8 sticky top-0 bg-white py-2 border-b items-center justify-between">
      <div className="flex items-center gap-2">
        <button onClick={() => setOpen(true)} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Link to="/">
          <img
            className="h-12 w-auto rounded-md object-cover"
            src={AnguillaFlag}
            alt="anguilla-flag"
          />
        </Link>
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

export default MobileNav;
