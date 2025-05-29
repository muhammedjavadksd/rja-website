
import { useState, useEffect } from "react";

export const AnimatedLogo = () => {

    return (
        <div className="relative h-12 w-12 overflow-hidden">
            <div
                className={`h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-lg absolute top-0 left-0 transition-all duration-700 opacity-100 scale-100 shadow-lg`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute animate-pulse-slow">
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="2" x2="9" y2="4"></line>
                        <line x1="15" y1="2" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="22"></line>
                        <line x1="15" y1="20" x2="15" y2="22"></line>
                        <line x1="20" y1="9" x2="22" y2="9"></line>
                        <line x1="20" y1="14" x2="22" y2="14"></line>
                        <line x1="2" y1="9" x2="4" y2="9"></line>
                        <line x1="2" y1="14" x2="4" y2="14"></line>
                    </svg>
                </div>
                {/* <span className="relative z-10">RJA</span> */}
            </div>
        </div>
    );
};
