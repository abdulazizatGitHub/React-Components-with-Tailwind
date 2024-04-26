import React from "react";

function Button() {
    return(
        <div className="w-full h-48 my-60 flex items-center justify-evenly sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto rounded-md bg-slate-300 drop-shadow-2xl">
            <button className="w-28 h-10 mx-10 bg-black text-white font-bold font-serif rounded-sm hover:bg-white hover:text-black">Button 1</button>
            <button className="w-28 h-10 bg-blue-400 text-white font-bold font-mono rounded-md transition ease-in-out duration-100 hover:translate-x-1 hover:bg-white hover:text-blue-400" >Button 2</button>
            <button className="w-28 h-10 bg-cyan-900 text-white rounded-lg transition ease-in-out duration-200 hover:translate-y-0.5 hover:scale-110 hover:bg-transparent hover:text-black hover:border-2 border-cyan-900">Button 3</button>
            <button className="w-28 h-10 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 border-2 border-pink-500 rounded-xl transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">Button 4</button>
            <button className="w-28 h-10 font-semibold text-lg text-white font-sans bg-gradient-to-b from-pink-500 from-20% via-rose-500 via-30% to-violet-500 rounded-3xl shadow-xl transition ease-in-out duration-500 hover:scale-110">Button 4</button>
        </div>
    )
}
export default Button;