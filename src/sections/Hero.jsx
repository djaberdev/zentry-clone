import { useEffect, useRef, useState } from "react";

import Navbar from "./Navbar";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { heroSwitcherVideos, heroVideos } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [switcherCurrentIndex, setSwitcherCurrentIndex] = useState(currentIndex + 1);

    const heroVideoAreaRef = useRef(null);
    const heroVideosHolderRef = useRef(null);
    const videoSwitcherRef = useRef(null);

    // Get hero video path based on the given index
    function getHeroVideo(index) {
        return `/videos/hero-${index}.mp4`;
    }

    // Switch to the next video function
    function switchVideo() {
        
        setCurrentIndex(currentIndex + 1);

        setSwitcherCurrentIndex(switcherCurrentIndex + 1);

        animateSwitch(currentIndex);

    };

    // The clickable switcher interact on mouse move
    useEffect(() => {

        heroVideoAreaRef.current.addEventListener("mousemove", (e) => {
            
            // Get the X / Y values
            let moveX = (e.pageX / heroVideoAreaRef.current.clientWidth) * 60;
            let moveY = (e.pageY / heroVideoAreaRef.current.clientHeight) * 60;

            gsap.to(
                videoSwitcherRef.current, 
                {
                    x: moveX,
                    y: moveY,
                }
            )

        });

    }, []);

    // What happen if we reach the end of the videos — Switcher version
    useEffect(() => {
        if (switcherCurrentIndex === 5) setSwitcherCurrentIndex(1);
    }, [switcherCurrentIndex]);
    
    // What happen if we reach the end of the videos — Screen Video version
    useEffect(() => {
        if (currentIndex === 5) setCurrentIndex(1);
    }, [currentIndex]);
        
    // Animate The Video Switching
    function animateSwitch(currentIndex) {

        // Select The Current Video — Screen Video version
        const currentVideoEl = document.querySelector(`.video-${currentIndex}`);
        
        // Animate
        if (currentIndex === 4) {
            Array.from(document.querySelectorAll(`.hero-video`)).forEach(el => el.classList.remove("hero_video_clipPath-hide"));
        } else {
            currentVideoEl.classList.add("hero_video_clipPath-hide");
        }
        
        // Select The Current Video — Switcher Video version
        const currentSwitcherVideoEl = document.querySelector(`.switcher-video-${currentIndex}`);
        // Animate
        if (currentIndex === 4) {
            Array.from(document.querySelectorAll(`.switcher-video`)).forEach(el => el.classList.remove("switcher_video_clipPath-hide"));
        } else {
            currentSwitcherVideoEl.classList.add("switcher_video_clipPath-hide");
        }

    };

    // ScrollTrigger Animation
    useGSAP(() => {

        gsap.fromTo(
            heroVideosHolderRef.current,
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                scaleX: 1,
                rotate: 0,
                translateY: 0
            },
            {
                clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
                scaleX: 0.92,
                rotate: 3,
                translateY: -100,
                scrollTrigger: {
                    trigger: heroVideosHolderRef.current,
                    start: "top top",
                    end: "bottom 30%",
                    scrub: 1
                }
            }
        );

    });

    return (
        <div className="relative w-full h-screen bg-light-gray">
            <Navbar />

            <div ref={heroVideoAreaRef} className="absolute h-full w-full z-1 flex-center-all">
                {/* The screen playing video */}
                <div ref={heroVideosHolderRef} className="absolute inset-0 w-full h-full flex-center-all bg-black">
                    {/* {heroVideos.map((heroVideo, i) => (
                        <video 
                            key={i}
                            src={getHeroVideo(i + 1)}
                            muted
                            autoPlay
                            playsInline
                            loop
                            className={`hero-video ${heroVideo.className} absolute w-full h-full object-cover`}
                            style={{ zIndex: heroVideo.zIndex }}
                        ></video>
                    ))} */}
                </div>

                {/* The clickable switcher */}
                <div 
                    ref={videoSwitcherRef}
                    className="relative w-[200px] h-[200px] rounded-lg border-1 z-5 switcher-transition overflow-hidden border-neutral-950/0 opacity-95 hover:opacity-100 scale-80! hover:scale-102! sm:hover:scale-122! hover:border-neutral-950/60 cursor-pointer"
                    onClick={() => switchVideo()}
                >
                    {/* {heroSwitcherVideos.map((heroSwitcherVideo, i) => (
                        <video 
                            key={i}
                            src={getHeroVideo(i === 3 ? 1 : i + 2)}
                            muted
                            playsInline
                            loop
                            className={`switcher-video ${heroSwitcherVideo.className} absolute w-full h-full object-cover`} 
                            style={{ zIndex: heroSwitcherVideo.zIndex }}
                        ></video>
                    ))} */}
                </div>

                {/* The Centent */}
                <div className="absolute w-full h-[calc(100%_-_74px)] bottom-0 px-6.5">
                    <div className="relative z-4 mt-12 flex-col-start gap-5">
                        <h1 className="font-zentry text-[150px] max-md:text-[110px] max-sm:text-[80px] leading-[0.8] text-light-gray uppercase">Redefine</h1>
                        <p className="text-[17px] max-md:text-[15px] leading-[1.4] tracking-wide text-light-gray/80">Enter the Metagame Layer <br /> Unleash the Play Economy</p>
                        <button className="flex items-center gap-3.5 py-2.5 px-5 rounded-full bg-primary-yellow duration-300 hover:bg-primary-yellow/90 group cursor-pointer">
                            <svg fill="#000000" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1792" xmlSpace="preserve" className="size-[14px] -rotate-90 duration-300 -translate-x-0.5 group-hover:translate-x-0">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g >
                                    <path d="M1604.2,132.9L896,1659L187.8,132.9L896,506.4L1604.2,132.9z"></path>
                                </g>
                            </svg>

                            <span className="font-general uppercase text-[12px] font-medium">Watch Trailer</span>
                        </button>
                    </div>

                    <h1 className="absolute z-4 bottom-12 right-12 font-zentry text-[150px] max-md:text-[110px] max-sm:text-[80px] leading-[0.8] text-light-gray uppercase">Reality</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;