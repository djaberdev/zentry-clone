import { useState, useEffect, useRef } from "react";
import Navlink from "../components/Navlink";
import { navLinks } from "../constants";
import ZentryLogo  from "../components/svg/ZentryLogo";
import clsx from "clsx";

const Navbar = () => {

    const [playSong, setPlaySong] = useState(false);
    const audioRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            if (playSong) {
                Array.from(document.querySelectorAll(".vertical-line")).forEach(el => el.style.animationPlayState = "running");
                audioRef.current.play();
            }
            else {
                Array.from(document.querySelectorAll(".vertical-line")).forEach(el => el.style.animationPlayState = "paused");
                audioRef.current.pause();
            }
        }
    }, [playSong]);

    return (
        <header className="absolute w-full top-6 left-1/2 -translate-x-1/2 flex-center-all px-6 z-5">
            <nav className={clsx("relative w-full flex justify-between items-center duration-600", !isMenuOpen ? "bg-transparent h-[56px] rounded-none p-0" : "bg-black rounded-lg h-[80px] px-5")}>
                <div className="flex items-center">
                    <ZentryLogo 
                        width={110}
                        height={110}
                        fill={"white"}
                    />

                    <button className="py-2.5 px-5 hidden sm:flex items-center gap-2 rounded-full bg-light-gray group cursor-pointer -translate-x-6">
                        <span className="text-black text-[14px] font-general uppercase font-semibold">Products</span>

                        <svg fill="#000000" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1792" xmlSpace="preserve" className="size-[14px] -translate-y-0.5 duration-300 group-hover:translate-y-0">
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g >
                                <path d="M1604.2,132.9L896,1659L187.8,132.9L896,506.4L1604.2,132.9z"></path>
                            </g>
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-7">
                    <div className={clsx("menu flex items-center gap-7 h-[56px] max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[calc(100%_+_8px)] max-md:w-full max-md:justify-between max-md:duration-600 max-md:bg-black max-md:px-5 max-md:rounded-md", isMenuOpen ? "max-md:opacity-100 max-md:translate-y-0 max-md:rotate-0" : "max-md:opacity-0 max-md:-translate-y-1 max-md:-rotate-2")}>
                        {navLinks.map((navLink, i) => (
                            <Navlink
                                key={i}
                                navlinkObj={navLink}
                            />
                        ))}
                    </div>

                    <button 
                        className="flex items-center gap-1 cursor-pointer p-1"
                        onClick={() => setPlaySong(prev => !prev)}
                    >
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div 
                                key={i}
                                className="vertical-line"
                                style={{ animationDelay: `${i * 0.1}s`, animationPlayState: "paused" }}
                            ></div>
                        ))}
                    </button>

                    <button 
                        className="relative flex-center-all md:hidden size-[40px] bg-white/10 border-1 border-white/20 rounded-full backdrop-blur-md duration-300 active:scale-95 hover:bg-white/15 cursor-pointer"
                        onClick={() => setIsMenuOpen(prev => !prev)}
                    >
                        <img src="/images/menu.svg" alt="menu" className={clsx("absolute size-[26px] duration-500 opacity-0", !isMenuOpen && "opacity-100")} />
                        <img src="/images/close.svg" alt="close" className={clsx("absolute size-[22px] duration-500 opacity-0", isMenuOpen && "opacity-100")} />
                    </button>
                </div>
            </nav>

            <audio 
                ref={audioRef}
                src="/audio/loop.mp3" 
                hidden 
                loop
            ></audio>
        </header>
    );
};

export default Navbar;