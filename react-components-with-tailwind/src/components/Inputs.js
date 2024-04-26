import React from "react";
import { IoMdSearch } from "react-icons/io";

function Inputs() {
    return(
        <div className="w-full h-hvd min-h-48 bg-slate-300 grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div className="w-80 h-10 m-10 col-span-1 gap-0.5 sm:w-80 sm:col-span-1 flex justify-center align-center bg-white rounded-md">
                <IoMdSearch color="#9CA3AF" className="w-7 h-7 mx-1 my-1.5 " />
                <input type="text" placeholder="Search" className="w-80 bg-transparent rounded-md focus:outline-none placeholder-gray-400" />
            </div>
        </div>
    )
}
export default Inputs;