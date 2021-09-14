import React from "react";

const Header = ( {onOpenModal}) => {
  return (
    <header className="hidden xl:flex h-9 bg-gray-100 w-full items-center justify-between">
      <span className="h-5 w-6 ml-12 cursor-pointer">
        <img
          className="h-full w-full object-cover object-center"
          src="https://www.nike.com/assets/experience/ciclp/landing-pages/static/v2/103-86510af092c/static/icons/jordan.svg"
          alt="logo"
        />
      </span>
      <nav className="mr-10">
        <ul className="flex">
          <li className="m-2 text-sm hover:text-gray-500"><a href="https://localhost:3000">Help</a><span className="ml-3">|</span></li>
          <li className="m-2 text-sm hover:text-gray-500"><a href="https://localhost:3000">Join Us</a><span className="ml-3">|</span> </li>
          <li className="m-2 text-sm hover:text-gray-500" onClick={ () => {onOpenModal()}}><button>Sign in</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
