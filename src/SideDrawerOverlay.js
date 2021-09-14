import React from "react";
import ReactDom from "react-dom";
import { BsBag , BiHelpCircle , AiOutlineBorder } from "react-icons/all";

const SideDrawer = (props) => {
  const classes =
    props.show === true
      ? "transform translate-x-0"
      : "transform translate-x-full";

      const buttonClickHandler = () => {
        props.onCloseDrawer();
        props.onOpenModal();
      }

  return (
    <>
      <div
        className={`fixed h-screen top-0 right-0 bg-white z-40 w-10/12 sm:w-1/2 md:w-1/3 ${classes} transition-all duration-300 shadow-xl overflow-auto`}
      >
        <div className="mt-4 ml-6">
          <ul className="flex flex-col">
            <li className="my-1.5 p-2 text-xl font-semibold">Men</li>
            <li className="my-1.5 p-2 text-xl font-semibold">Women</li>
            <li className="my-1.5 p-2 text-xl font-semibold">Kids</li>
            <li className="my-1.5 p-2 text-xl font-semibold">Customise</li>
            <li className="my-1.5 p-2 text-xl font-semibold">Sale</li>
            <li className="my-1.5 p-2 text-xl font-semibold">SNKRS</li>
          </ul>
        </div>
        <div className="flex flex-row mt-8 p-2 ml-6 items-center">
          <span className="h-8 w-8">
            <img
              className="h-full w-full object-cover object-center"
              src="https://www.nike.com/assets/experience/ciclp/landing-pages/static/v2/103-86510af092c/static/icons/jordan.svg"
              alt="logo"
            />
          </span>
          <p className="text-lg text-gray-500 ml-2">Jorden</p>
        </div>
        <div className="mt-12 p-6 ml-4">
          <h3 className="text-lg text-gray-500">
            Become a Nike Member for the best Products inpiration and stories in
            sport.{" "}
            <a className="text-lg text-gray-900" href="nd">
              Learn More
            </a>
          </h3>
          <div className="mt-4">
            <button className="py-1 px-4 md:px-3 rounded-xl text-lg bg-black text-white">
              Join Us
            </button>
            <button className="py-1 px-4 md:px-3 rounded-xl text-lg bg-white text-black border-2 border-gray-500 ml-4" onClick={buttonClickHandler}>
              Sign in
            </button>
          </div>
        </div>
        <div className="mt-6 ml-8">
          <ul className="flex flex-col px-2">
            <li className="flex flex-row mb-3">
              <span className="text-2xl">
                <BsBag />
              </span>
              <p className="text-lg ml-4 text-black">Bag</p>
            </li>
            <li className="flex flex-row mb-3">
              <span className="text-2xl">
                <AiOutlineBorder />
              </span>
              <p className="text-lg ml-4 text-black">Orders</p>
            </li>
            <li className="flex flex-row">
              <span className="text-2xl">
                <BiHelpCircle />
              </span>
              <p className="text-lg ml-4 text-black">Help</p>
            </li>
            <div className="mt-40"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

const SideDrawerOverlay = ({ show , onCloseDrawer , onOpenModal }) => {
  return (
    <>
      {ReactDom.createPortal(
        <SideDrawer show={show} onCloseDrawer={onCloseDrawer} onOpenModal={onOpenModal}/>,
        document.getElementById("drawer-hook")
      )}
    </>
  );
};

export default SideDrawerOverlay;
