import React from 'react'

const Backdrop = (props) => {
    const classes = props.searchBox ? "z-10" : "z-30";
    const backdropChangeHandler = () => {
        if(props.modal) {
            props.onModalClick();
        }
        if(props.drawer) {
            props.onSideDrawerClick();
        }
        if(props.searchBox) {
            props.onClickSearchBoxClose();
            props.modeOff();
        }

    }

    return (
        <div className={`fixed left-0 top-0 w-full h-screen bg-black opacity-70 ${classes}`} onClick={backdropChangeHandler}></div>
    )
}

export default Backdrop;
