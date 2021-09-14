import React from 'react'

const Main = () => {
    return (
        <>
            <div className="bg-gray-100 p-2">
                <h2 className="text-center text-sm">FREE DELIVERY</h2>
                <p className="text-center text-xs mt-2">Applies to orders of ₹14,000 or more. View details</p>
            </div>
            <div className="flex justify-start xl:justify-center px-5 xl:px-10">
                <div className="shadow-md w-full h-80 md:h-full">
                    <img className="w-full h-full cursor-pointer  object-cover object-center" src="main.png" alt="content" />
                </div>
            </div>
            <div className="mt-10 px-6">
                <div className="cursor-pointer flex flex-col items-start xl:items-center">
                    <h1 className="text-5xl  font-black">YOUR NIKE CONNECTION</h1>
                    <h3 className="mt-6 text-lg font-semibold">Mor sport , more inspiration , more Nike !</h3>
                    <button className="px-4 py-2 rounded-xl mt-6 mb-6 bg-black text-white">Get your Great</button>
                </div>
            </div>   
        </>
    )
}

export default Main;
