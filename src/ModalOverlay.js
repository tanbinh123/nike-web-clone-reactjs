import React , {useState} from "react";
import ReactDom from "react-dom";
import { BiX } from "react-icons/bi";

const Modal = (props) => {

  const [email ,setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [errorOfEmail , setErrorOfEmail] = useState(false);
  const [errorOfPassword , setErrorOfPassword] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // front-end validation of email and password (if length is of email and password is less than 3)
    if(email.trim().length < 2) {
      setErrorOfEmail(true);
    }
    if(password.trim().length < 2) {
      setErrorOfPassword(true)
    }
    console.log(email,password);

    // back-end request
  }



  const classes =
    props.show === true
      ? "top-28 transform translate-y-0"
      : "top-0 transform -translate-y-full";

  const borderClasses = errorOfEmail ? "border-red-600" : "";
  const borderClassesOfPassword = errorOfPassword ? "border-red-600" : "";    

  return (
    <div
      className={`bg-white fixed left-0 w-full md:left-1/4 xl:left-1/3 xl:ml-12 md:w-1/2 xl:w-1/4 shadow-sm z-40 transition-all duration-600 ${classes} rounded-lg `}
    >
      <header className="text-center py-2">
        <span className="text-4xl text-black mr-2 float-right cursor-pointer">
          <BiX
            onClick={() => {
              props.onCloseModal();
              setErrorOfEmail(false);
              setErrorOfPassword(false);
              setEmail('');
              setPassword('');
            }}
          />
        </span>
        <div className="flex justify-center items-center">
          <span>
            <img
              className="xl:ml-10 w-16 h-12 object-cover object-center"
              src="nike-logo.svg"
              alt="main-logo"
            />
          </span>
        </div>
        <main className="w-3/4 mx-auto  flex flex-col justify-center">
          <div className="px-10 py-2">
            <h1 className="mt-4 font-bold text-xl">
              YOUR ACCOUNT FOR EVERYTHING NIKE
            </h1>
          </div>
          <form onSubmit={formSubmitHandler}>
            <div className="mt-2">
              <input
                type="text"
                className={`w-full border-2 mt-2 p-1 focus:outline-none ${borderClasses}`}
                placeholder="Email address" required
                onChange={emailChangeHandler}
                value={email}
              />
              {errorOfEmail && <p className="text-red-600 text-xs">Please enter the valid email address</p>}
              <input
                type="text"
                className={`w-full border-2 mt-3 p-1 focus:outline-none ${borderClassesOfPassword}`}
                placeholder="Password" required
                onChange={passwordChangeHandler}
                value={password}
              />
              {errorOfPassword && <p className="text-red-600 text-xs">Please enter the valid password</p>}
            </div>
            <div className="mt-6">
              <span className="text-xs flex justify-between items-center text-gray-500">
                <span className="ml-2 ">
                  <input type="checkbox" name="" id=""  /> Keep me sign in
                </span>
                <a href="nd">forgotten your password ?</a>
              </span>
              <p className=" text-xs mt-6 px-4 text-gray-500">
                By logging in, you agree to Nike's <a href="nd" className="underline">Privacy Policy</a>  and <a href="nd" className="underline">Terms of Use.</a> 
              </p>
            </div>
            <button className="w-full mt-4 bg-black text-white p-2">
              SIGN IN
            </button>
            <p className="mt-6 mb-6 text-xs text-gray-500">
              Not a Member? <a href="nd">Join Us.</a>
            </p>
          </form>
        </main>
      </header>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Modal
          onClick={props.onClick}
          show={props.show}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-hook")
      )}
    </>
  );
};

export default ModalOverlay;
