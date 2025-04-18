import React from "react";

const Card = ({ children, key }) => {
    return (
        <div key={key} className="relative w-50 h-64 p-1 rounded-[10px] bg-gradient-to-r from-blue-500 to-purple-500 overflow-visible z-1 shadow-[0px_4px_16px_2px_rgba(59,_130,_246,_0.5)] hover:-translate-y-2 hover:shadow-[0px_8px_32px_4px_rgba(59,_130,_246,_0.5)] transition-all duration-300 ease-in-out">
            <div className="flex flex-col justify-center items-center gap-4 h-full w-full bg-[#111111] rounded-md p-2">
                {children}
            </div>
        </div>
    );
}

export { Card };