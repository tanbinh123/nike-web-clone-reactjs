import React, { useState } from "react";

import Header from "./Header";
import MainNavigationHeader from "./MainNavigationHeader";
import Main from "./Main";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import SideDrawerOverlay from "./SideDrawerOverlay";
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);
  const [searchBoxIsOpen , setSearchBoxIsOpen] = useState(false);
  const [mobileSearchMode , setMobileSearchMode ] = useState(false);

  const openModalHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const sideDrawerOpenHandler = () => {
    setSideDrawerIsOpen(true);
  };

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsOpen(false);
  };

  const searchBoxOpenHandler = () => {
    setSearchBoxIsOpen(true);
  }

  const searchBoxCloseHandler = () => {
    setSearchBoxIsOpen(false);
  }

  const mobileSearchModeON = () => {
    setMobileSearchMode(true);
  }

  const mobileSearchModeOff = () => {
    setMobileSearchMode(false);
  }
  
  return (
    <>
      {modalIsOpen && <Backdrop onModalClick={closeModalHandler} onSideDrawerClick={sideDrawerCloseHandler} modal={modalIsOpen} drawer=
      
      {sideDrawerIsOpen} />}
      
      {sideDrawerIsOpen && <Backdrop onModalClick={closeModalHandler} onSideDrawerClick={sideDrawerCloseHandler} modal={modalIsOpen} 
      drawer={sideDrawerIsOpen} />}

      {searchBoxIsOpen && <Backdrop onModalClick={closeModalHandler} onSideDrawerClick={sideDrawerCloseHandler} modal={modalIsOpen} modeOff={mobileSearchModeOff} drawer={sideDrawerIsOpen} searchBox={searchBoxIsOpen} onClickSearchBoxClose={searchBoxCloseHandler} />}
      
      <ModalOverlay show={modalIsOpen} onCloseModal={closeModalHandler} />
      
      <SideDrawerOverlay show={sideDrawerIsOpen} onCloseDrawer={sideDrawerCloseHandler} onOpenModal={openModalHandler}/>
      
      <Header onOpenModal={openModalHandler} />

      <MainNavigationHeader onOpenDrawer = {sideDrawerOpenHandler} onSearchBoxClick={searchBoxOpenHandler} searchBox={searchBoxIsOpen} onCloseSeachBox={searchBoxCloseHandler} onClickON={mobileSearchModeON} onClickOff={mobileSearchModeOff} mobileSearchMode={mobileSearchMode}/>
      <main>
        <Main />
      </main>
    </>
  );
};

export default App;
