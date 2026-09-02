import { useEffect, useRef } from "react";
import gsap from "gsap";

import { BadgePlayable } from "../components";
import ZentryLogo  from "../components/svg/ZentryLogo";

const Features = () => {

    const specialBgRef = useRef(null);
    const comingSoonRef = useRef(null);

    useEffect(() => {

        function handleMove(e) {
            
            const rect = comingSoonRef.current.getBoundingClientRect();

            let x = e.clientX - rect.left - 30;
            let y = e.clientY - rect.top - 30;

            gsap.to(
                specialBgRef.current,
                {
                    x: x,
                    y: y,
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    duration: 0.3,
                }
            )

        }

        comingSoonRef.current.addEventListener("mousemove", (event) => handleMove(event));

        function handleLeave() {

            gsap.to(
                specialBgRef.current,
                {
                    x: "unset",
                    y: "unset",
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    duration: 0.3,
                }
            )

        }

        comingSoonRef.current.addEventListener("mouseleave", handleLeave);

    }, []);

    return (
        <section className="px-8 md:px-14 lg:px-26 py-26 text-light-gray">
            <div className="flex-col-start max-w-[460px] mb-26">
                <h3 className="text-[16px] md:text-[17px] font-medium tracking-[0.3px]">Into the Metagame Layer</h3>
                <p className="text-[15.5px] md:text-[16.5px] font-medium text-neutral-600">
                    Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
                </p>
            </div>

            <div className="w-full flex-col-start gap-7.5">

                {/* The Big Card */}
                <div className="relative w-full h-[480px] rounded-xl ring-[1.5px] ring-neutral-600/60 p-6 overflow-hidden">
                    <div className="relative flex-col-start gap-2 z-1">
                        <h2 className="font-zentry text-[62px] leading-[0.8]">Radiant</h2>
                        <p className="text-[15.5px] text-neutral-400 font-medium tracking-[0.1px]">
                            A cross-platform metagame app. <br />
                            turning your activities across <br />
                            Web2 and Web3 games into a <br />
                            rewaring adventure.
                        </p>
                    </div>

                    <div className="absolute top-4 right-4 z-1">
                        <img 
                            src="/images/camera.svg"
                            alt="camera"
                            className="size-9"
                        />
                    </div>

                    <BadgePlayable color={"#d09ba8"} />

                    <video 
                        src="/videos/feature-1.mp4"
                        muted
                        autoPlay
                        loop
                        className="absolute -top-1/12 -right-1/12 h-[calc(100%_+_60px)] z-0"
                    ></video>
                </div>

                {/* Bento Grid */}
                <div className="w-full flex flex-col gap-10">
                    
                    {/* Middle Cards */}
                    <div className="w-full flex flex-col md:flex-row items-center gap-10">

                        {/* The Large One */}
                        <div className="relative w-full md:w-1/2 h-[720px] rounded-xl ring-[1.5px] ring-neutral-600/60 p-6 overflow-hidden">
                            <div className="relative flex-col-start gap-2 z-1">
                                <h2 className="font-zentry text-[62px] leading-[0.8] tracking-[1px]">Zigma</h2>
                                <p className="text-[15.5px] text-neutral-400 font-medium tracking-[0.1px]">
                                    An anime and gaming-inspired <br />
                                    NFT collection — the IP primed for expansion
                                </p>
                            </div>

                            <div className="absolute top-4 right-4 z-1">
                                <img 
                                    src="/images/camera.svg"
                                    alt="camera"
                                    className="size-9"
                                />
                            </div>

                            <BadgePlayable color={"#661bb7"} />

                            <video 
                                src="/videos/feature-2.mp4"
                                muted
                                autoPlay
                                loop
                                className="absolute top-1/2 left-1/2 -translate-1/2 h-full sm:h-[calc(100%_+_170px)] md:h-[calc(100%_+_60px)] z-0"
                            ></video> 
                        </div>
                        
                        {/* The Side Ones */}
                        <div className="flex flex-col w-full md:w-1/2 h-[720px] gap-10">
                            <div className="relative h-1/2 rounded-xl ring-[1.5px] ring-neutral-600/60 p-6 overflow-hidden">
                                <div className="relative flex-col-start gap-2 z-1">
                                    <h2 className="font-zentry text-[62px] leading-[0.8] tracking-[1px]">Nexus</h2>
                                    <p className="text-[15.5px] text-neutral-400 font-medium tracking-[0.1px]">
                                        A gamified social hub, adding a <br />
                                        new dimension of play to social <br />
                                        interaction for Web3 communities.
                                    </p>
                                </div>

                                <div className="absolute top-4 right-4 z-1">
                                    <img 
                                        src="/images/camera.svg"
                                        alt="camera"
                                        className="size-9"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <BadgePlayable color={"#9094e6"} />

                                    <div className="absolute z-1 bottom-6 left-[calc(138px_+_38px)] py-2.5 px-4 ring-[1.5px] ring-neutral-300 bg-[#080808] rounded-full flex flex-row-reverse items-center gap-3 overflow-hidden duration-300 cursor-pointer hover:bg-neutral-900/50">
                                        <svg height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1792" xmlSpace="preserve" className="arrow fill-neutral-300
                                        /50 size-[14px] transform-[rotate(-140deg)_rotateX(20deg)_rotateY(40deg)] -translate-y-[1px] duration-500 group-hover:transform-[rotate(-115deg)_rotateX(10deg)_rotateY(20deg)]">
                                            <g strokeWidth="0"></g>
                                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g >
                                                <path d="M1604.2,132.9L896,1659L187.8,132.9L896,506.4L1604.2,132.9z"></path>
                                            </g>
                                        </svg>
                                        <span className="text-neutral-300 text-xs font-general font-medium uppercase select-none">Launch Site</span>
                                    </div>
                                </div>

                                <video 
                                    src="/videos/feature-3.mp4"
                                    muted
                                    autoPlay
                                    loop
                                    className="absolute top-[-12%] right-[-22%] w-full h-[calc(100%_+_80px)] z-0"
                                ></video>
                            </div>

                            <div className="relative w-full h-1/2 rounded-xl ring-[1.5px] ring-neutral-600/60 p-6 overflow-hidden">
                                <div className="relative flex-col-start gap-2 z-1">
                                    <h2 className="font-zentry text-[62px] leading-[0.8] tracking-[1px]">Azul</h2>
                                    <p className="text-[15.5px] text-neutral-400 font-medium tracking-[0.1px]">
                                        A cross-world AI Agent - elevating <br />
                                        your gameplay to be more fun and productive. 
                                    </p>
                                </div>

                                <div className="absolute top-4 right-4 z-1">
                                    <img 
                                        src="/images/camera.svg"
                                        alt="camera"
                                        className="size-9"
                                    />
                                </div>

                                <BadgePlayable color={"#5382e3"} />

                                <div className="absolute top-[-22%] right-[-22%] w-full h-[calc(100%_+_200px)] z-0">
                                    <div className="absolute left-10 bottom-0 h-full w-[60px] blur-[6px] bg-gradient-to-r from-black to-black/80"></div>
                                    <video 
                                        src="/videos/feature-4.mp4"
                                        muted
                                        autoPlay
                                        loop
                                        className="w-full h-full"
                                    ></video>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* The Final Two */}
                    <div className="w-full flex flex-col md:flex-row items-center gap-10">
                        <div ref={comingSoonRef} className="relative w-full md:w-1/2 h-[360px] rounded-xl ring-[1.5px] ring-neutral-600/60 p-6 overflow-hidden group">
                            <h1 className="relative z-1 font-zentry text-[58px] leading-[0.9] font-medium tracking-[0.3px] text-black duration-300 group-hover:text-white">
                                More <br />
                                Coming <br />
                                Soon 
                            </h1>
                            <div className="absolute z-1 bottom-2 -right-8 scale-150">
                                <ZentryLogo
                                    width={100}
                                    height={100}
                                    fill={"black"}
                                    fillClasses={"duration-300 group-hover:fill-white!"}
                                />
                            </div>
                            
                            <div ref={specialBgRef} className="absolute inset-0 w-full h-full bg-primary-purple z-0"></div>
                        </div>

                        <div className="relative w-full md:w-1/2 h-[360px] flex-center-all rounded-xl ring-[1.5px] ring-neutral-600/60 overflow-hidden">
                            <video 
                                src="/videos/hero-3.mp4"
                                muted
                                autoPlay
                                loop
                                className="h-[calc(100%_+_100px)]"
                            ></video>
                        </div>
                    </div>

                </div>
            </div>

            
        </section>
    );
};

export default Features;