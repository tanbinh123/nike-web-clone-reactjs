import React from "react";
import { BsSearch, FaRegHeart, BsBag } from "react-icons/all";
import { BiX } from "react-icons/bi";

const MainNavigationHeader = (props) => {
  const mobileSearchHandler = () => {
    props.onSearchBoxClick();
    props.onClickON();
  };

  const closeButtonHandler = () => {
    props.onClickOff();
    props.onCloseSeachBox();
  };

  console.log(props.searchBox);
  const searchBoxClasses =
    props.searchBox === true
      ? "w-screen fixed left-0 top-0 h-1/2 bg-white z-10"
      : "hidden";
  const inputClasses =
    props.searchBox === true ? "w-96 transform -translate-x-full" : "";
  const mobileClasses = props.mobileSearchMode === true ? "hidden" : "";
  const mobileModalClass = props.mobileSearchMode === true ? "h-screen" : "";
  const mobileInputClass =
    props.mobileSearchMode === true ? "block relative left-0 top-5 h-10 pl-1 rounded-xl z-20" : "hidden";

  return (
    <>
      <div className={`h-16 flex items-center justify-between`}>
        <span className={`cursor-pointer relative z-20 ${mobileClasses}`}>
          <img
            className="ml-4 xl:ml-10 w-16 h-12 object-cover object-center"
            src="nike-logo.svg"
            alt="main-logo"
          />
        </span>
        <div
          className={`${searchBoxClasses} transform transition-all duration-500 ${mobileModalClass}`}
        >
          <span className="text-3xl text-black mr-10 mt-10 float-right cursor-pointer p-2 bg-gray-200 rounded-3xl">
            <BiX onClick={closeButtonHandler} />
          </span>
        </div>
        <nav className={`ml-40 hidden xl:block`}>
          <ul className="flex justify-center">
            <li className="mx-3">
              <a href="nd" className="">
                Men
              </a>
            </li>
            <li className="mx-3">
              <a href="nd" className="">
                Women
              </a>
            </li>
            <li className="mx-3">
              <a href="nd" className="">
                Kids
              </a>
            </li>
            <li className="mx-3">
              <a href="nd" className="">
                Customise
              </a>
            </li>
            <li className="mx-3">
              <a href="nd" className="">
                Sale
              </a>
            </li>
            <li className="mx-3">
              <a href="nd" className="">
                SNKRS
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex h-full items-center">
          <div
            className={`w-40 bg-gray-100 rounded-2xl h-1/2  items-center p-3 mx-4 hidden xl:flex hover:bg-gray-200 ${inputClasses}  transition-all duration-500 relative z-20`}
            onClick={() => {
              props.onSearchBoxClick();
            }}
          >
            <label htmlFor="search-box" className="text-lg ">
              <BsSearch />
            </label>
            <input
              type="text"
              id="search-box"
              placeholder="Search"
              className="border-none focus:outline-none w-full bg-gray-100  hover:bg-gray-200"
              onClick={() => {
                props.onSearchBoxClick();
              }}
            />
          </div>
          <div className=" flex items-center">
            <span className="text-2xl mr-4 hidden xl:inline-block hover:bg-gray-300 p-1.5 rounded-2xl">
              <FaRegHeart />
            </span>
            <span className="text-2xl mr-4 hover:bg-gray-300 p-1.5 rounded-2xl">
              <BsBag />
            </span>
            <span className="xl:hidden text-xl mr-4">
                <BsSearch
                  onClick={mobileSearchHandler}
                />
                <input
                  type="text"
                  id="search-box"
                  placeholder="Search"
                  className={`border-none bg-gray-100 focus:outline-none  md:w-96 ${mobileInputClass} `}
                />
            </span>
            <span
              className="text-2xl mr-3 xl:hidden cursor-pointer"
              onClick={() => {
                props.onOpenDrawer();
              }}
            >
              ☰
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigationHeader;
