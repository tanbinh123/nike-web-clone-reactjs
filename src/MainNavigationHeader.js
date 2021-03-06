import React  from "react";
import { BsSearch, FaRegHeart, BsBag } from "react-icons/all";
import { BiX } from "react-icons/bi";

const MainNavigationHeader = (props) => {

  const closeButtonHandler = () => {
    if(window.innerWidth>1200){
      props.onCloseSeachBox();
    }else {
      props.onClickOff();
    }
  };

  const searchClickHandler = () => {
    if(window.innerWidth>1200){
      props.onSearchBoxClick();
    }else {
      props.onClickON();
    }
  }

  const searchBoxClasses =
    props.searchBox === true
      ? "w-screen fixed left-0 top-0 bg-white h-1/2 z-10 transform transition-all duration-500"
      : "";
  const mobileModalClass = props.mobileSearchMode === true ? "w-screen fixed left-0 top-0 bg-white z-10 h-screen" : "";
  const inputClasses = props.searchBox === true ? "w-96 transform -translate-x-full transition-all duration-500" : "";
  const mobileDivClasses = props.mobileSearchMode === true ? "w-40 md:w-96 mt-16 ml-10 md:ml-52" : "";
  const mobileClasses = props.mobileSearchMode === true ? "hidden" : "";
  const mobileInputClasses = props.mobileSearchMode === true ? "block" : "hidden"
  let closeClasses;
  if(props.searchBox || props.mobileSearchMode){
    closeClasses="block";
  }else {
    closeClasses="hidden";
  }

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
          className={`${searchBoxClasses} ${mobileModalClass} `}
        >
          <span className={`text-2xl text-black mr-10 mt-12 float-right cursor-pointer p-2 bg-gray-200 rounded-3xl ${closeClasses}`}>
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
        <div className="flex h-full justify-start items-center">
          <div
            className={`bg-gray-100 rounded-2xl  h-1/2 items-center p-3 mx-4 flex hover:bg-gray-200 ${inputClasses} ${mobileDivClasses} relative z-20`}
            onClick={searchClickHandler}
          >
            <label htmlFor="search-box" className="text-lg">
              <BsSearch />
            </label>
            <input
              type="text"
              id="search-box"
              placeholder="Search"
              className={`border-none focus:outline-none w-full bg-gray-100 hover:bg-gray-200 xl:block ${mobileInputClasses}`}
              onClick={searchClickHandler}
            />
          </div>
          <div className=" flex items-center">
            <span className="text-2xl mr-4 hidden xl:inline-block hover:bg-gray-300 p-1.5 rounded-2xl">
              <FaRegHeart />
            </span>
            <span className="text-2xl mr-4 hover:bg-gray-300 p-1.5 rounded-2xl">
              <BsBag />
            </span>
            <span
              className="text-2xl mr-3 xl:hidden cursor-pointer"
              onClick={() => {
                props.onOpenDrawer();
              }}
            >
              ???
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigationHeader;
