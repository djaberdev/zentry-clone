import { useRef, useState } from "react";
import { clsx } from "clsx";
import { Element } from "react-scroll";
import { vaultTexts } from "../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vault = () => {

    const animationSectionRef = useRef(null);

    useGSAP(() => {

        // Resets before Animate
        gsap.set(".svg-1 path", { svgOrigin: "93.5 93.5" });
        gsap.set(".svg-3 #inside", { svgOrigin: "100.5 100.5" });

        // 1ST Timeline
        function first() {
            const TL1 = gsap.timeline();
            
            // Content Animation
            TL1.to(".info-box_1 .secondary-title", { opacity: 0 })
            TL1.to(".info-box_1 .primary-title", { opacity: 1 })
            TL1.to(".info-box_1 .progress-bar > .progress-fill", { height: "100%" })
            TL1.to(".info-box_1 .secondary-title", { opacity: 1 })
            TL1.to(".info-box_1 .primary-title", { opacity: 0 })
            TL1.fromTo(".info-box_1 .details", 
                { height: "64px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
                { height: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
            );
            
            // SVG Animation
            TL1.fromTo(".svg-1 #out", { rotate: 0 }, { rotate: 360, duration: TL1.duration() }, 0);
            TL1.fromTo(".svg-1 #transparent", { rotate: 0 }, { rotate: -270, duration: TL1.duration() }, 0);
            TL1.fromTo(".svg-1 #inside", { rotate: 0 }, { rotate: 180, duration: TL1.duration() }, 0);
            TL1.fromTo(".svg-1", { opacity: 1 }, { opacity: 0 }, "-=1");
            TL1.fromTo(".svg-2", { opacity: 0 }, { opacity: 1 });

            return TL1;
        };

        // 2nd Timeline
        function second() {
            const TL2 = gsap.timeline();
            
            // Content Animation
            TL2.to(".info-box_2", { opacity: 1, gap: "24px" })
            TL2.fromTo(".info-box_2 .details", 
                { height: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                { height: "64px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }
            );
            TL2.to(".info-box_2 .secondary-title", { opacity: 0 })
            TL2.to(".info-box_2 .primary-title", { opacity: 1 })
            TL2.to(".info-box_2 .progress-bar > .progress-fill", { height: "100%" })
            TL2.to(".info-box_2 .secondary-title", { opacity: 1 })
            TL2.to(".info-box_2 .primary-title", { opacity: 0 })
            TL2.fromTo(".info-box_2 .details", 
                { height: "64px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
                { height: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
            );
            
            // SVG Animation
            TL2.fromTo(".svg-2 #top-right", { opacity: 1 }, { opacity: 0, duration: 1 }, 0);
            TL2.fromTo(".svg-2 #top-left", { opacity: 1 }, { opacity: 0, duration: 1 }, 0);
            
            TL2.to(".svg-2 #center", { rotateZ: "50deg", duration: TL2.duration() }, 0);
            TL2.to(".svg-2 #middle-right", { x: -49, y: -0.5, rotateZ: "50deg", duration: TL2.duration() }, 0);
            TL2.to(".svg-2 #middle-left", { x: 49, y: 0.5, rotateZ: "50deg", duration: TL2.duration() }, 0);

            TL2.fromTo(".svg-2 #bottom-right", { opacity: 1 }, { opacity: 0, duration: 1 }, 0);
            TL2.fromTo(".svg-2 #bottom-left", { opacity: 1 }, { opacity: 0, duration: 1 }, 0);

            TL2.fromTo(".svg-2", { opacity: 1 }, { opacity: 0 }, "-=1");
            TL2.fromTo(".svg-3", { opacity: 0 }, { opacity: 1 });

            return TL2;
        };

        // 3rd Timeline
        function third() {
            const TL3 = gsap.timeline();
            
            // Content Animation
            TL3.to(".info-box_3", { opacity: 1, gap: "24px" })
            TL3.fromTo(".info-box_3 .details", 
                { height: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                { height: "64px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }
            );
            TL3.to(".info-box_3 .secondary-title", { opacity: 0 })
            TL3.to(".info-box_3 .primary-title", { opacity: 1 })
            TL3.to(".info-box_3 .progress-bar > .progress-fill", { height: "100%" })
            TL3.to(".info-box_3 .secondary-title", { opacity: 1 })
            TL3.to(".info-box_3 .primary-title", { opacity: 0 })
            TL3.fromTo(".info-box_3 .details", 
                { height: "64px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
                { height: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
            );
            
            // SVG Animation
            TL3.fromTo(".svg-3", { rotate: 0 }, { rotate: 240, duration: TL3.duration() }, 0);
            TL3.fromTo(".svg-3 #inside", { rotate: 0 }, { rotate: 180, duration: TL3.duration() }, 0);

            return TL3;
        };

        const mainTL = gsap.timeline({
            scrollTrigger: {
                trigger: animationSectionRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });

        // Nest within "mainTL"
        mainTL.add(first()).add(second()).add(third());

    });

    return (
        <Element name="vault">
            <section className="bg-primary-yellow w-full px-10 py-10 flex flex-col justify-between">
                
                {/* The Section Intro Text */}
                <div className="flex flex-col items-start gap-7">
                    <h1 className="font-zentry text-[96px] leading-[0.9] font-medium tracking-[0.3px]">
                        The Universe <br />
                        Powered By ▫ Zent
                    </h1>

                    <button className="flex items-center gap-3.5 py-2.5 px-6 rounded-full bg-black duration-300 hover:bg-black/95 cursor-pointer">
                        <span className="font-general uppercase text-[12px] font-medium text-light-gray">Enter Vault</span>
                    </button>
                </div>

                {/* The Section Footer - Animation Place */}
                <div ref={animationSectionRef} className="w-full h-screen flex-end-between pb-26!">
                    <div className="w-[440px] flex-col-start gap-8">
                        {vaultTexts.map((obj) => (
                            <div className={clsx(`flex-col-start info-box_${obj.id}`, obj.id === 1 ? "opacity-100 gap-4" : "opacity-50 gap-0")}>
                                
                                <div className="w-full flex items-center gap-8">
                                    <div className="relative size-5 flex-center-all">
                                        <span className="font-general text-[12px] font-medium">{"0" + obj.id}</span>
                                    </div>

                                    <div className="relative w-full">
                                        {/* Secondary */}
                                        <h2 className="secondary-title absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-general text-[12px] font-medium uppercase opacity-100">{obj.title}</h2>

                                        {/* Primary */}
                                        <h2 className="primary-title absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[16px] font-medium opacity-0">{obj.title}</h2>
                                    </div>
                                </div> 

                                <div className={clsx("details w-full flex items-center gap-8", obj.id !== 1 && "h-0 [clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)]")}>
                                    {/* Progress */}
                                    <div className="w-11 h-[64px] flex-center-all">
                                        <div className="progress-bar relative w-[3px] h-full bg-black/20 rounded-full">
                                            <div className="progress-fill absolute inset-0 w-full h-0 bg-black/80 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <p className="text-[15px] font-medium text-black/75">{obj.body}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="relative flex-end-center w-[400px] h-[400px]">
                        {/* SVG's */}
                        
                        <svg className="svg-1 absolute" width="265" height="265" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="out" d="M0 93.3381L93.3381 0L186.677 93.3388L93.3388 186.677L0 93.3381Z" fill="black"/>
                            <path id="transparent" d="M47 47.3381H139V140.338H47V47.3381Z" fill="#EDFF66"/>
                            <path id="inside" d="M46.402 93.3381L92.364 47.3762L138.326 93.3381L92.364 139.3L46.402 93.3381Z" fill="black"/>
                        </svg>

                        <svg className="svg-2 absolute" width="265" height="265" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="bottom-left" d="M50.9428 210L45.7439 173.901L75.2283 167.535L80.4272 203.635L50.9428 210Z" fill="black"/>
                            <path id="bottom-right" d="M164.257 173.901L159.058 210L129.574 203.635L134.773 167.535L164.257 173.901Z" fill="black"/>
                            <path id="middle-right" d="M167.66 106.902L188.83 80.9823L210 106.902L188.83 132.822L167.66 106.902Z" fill="black"/>
                            <path id="center" d="M83.8306 106.902L105.001 80.9823L126.171 106.902L105.001 132.822L83.8306 106.902Z" fill="black"/>
                            <path id="middle-left" d="M0 106.902L21.1702 80.9823L42.3405 106.902L21.1702 132.822L0 106.902Z" fill="black"/>
                            <path id="top-left" d="M42.6368 31.7452L57.6064 0L83.5346 18.3281L68.565 50.0733L42.6368 31.7452Z" fill="black"/>
                            <path id="top-right" d="M152.394 1.85543e-06L167.364 31.7452L141.435 50.0733L126.466 18.3281L152.394 1.85543e-06Z" fill="black"/>
                        </svg>

                        <svg className="svg-3 absolute" width="265" height="265" viewBox="0 0 201 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="transparent" d="M70 70H131V131H70V70Z" fill="#EDFF66"/>
                            
                            <path id="inside" d="M70 100.956L100.5 70.4558L131 100.956L100.5 131.456L70 100.956Z" fill="black"/>

                            <g id="top-head">
                                <path d="M70 35C70 34.4477 70.4477 34 71 34H130C130.552 34 131 34.4477 131 35V70H70V35Z" fill="black"/>
                                <path d="M100.5 0L131.244 34.5H69.7561L100.5 0Z" fill="black"/>
                            </g>

                            <g id="left-head">
                                <path d="M35 131C34.4477 131 34 130.552 34 130V71C34 70.4477 34.4477 70 35 70H70V131H35Z" fill="black"/>
                                <path d="M0 100.5L34.5 69.7561V131.244L0 100.5Z" fill="black"/>
                            </g>

                            <g id="bottom-head">
                                <path d="M131 166C131 166.552 130.552 167 130 167H71C70.4477 167 70 166.552 70 166V131H131V166Z" fill="black"/>
                                <path d="M100.5 201L69.7561 166.5H131.244L100.5 201Z" fill="black"/>
                            </g>

                            <g id="right-head">
                                <path d="M166 70C166.552 70 167 70.4477 167 71V130C167 130.552 166.552 131 166 131H131V70H166Z" fill="black"/>
                                <path d="M201 100.5L166.5 131.244V69.7561L201 100.5Z" fill="black"/>
                            </g>
                        </svg>

                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Vault;