import { useEffect, useRef } from "react";

import { Element } from "react-scroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(
    ScrollTrigger,
    MorphSVGPlugin
);

const About = () => {

    const aboutSectionRef = useRef(null);
    const aboutWindowRef = useRef(null);
    const aboutImgRef = useRef(null);
    const aboutClipPathRef = useRef(null);

    // ScrollTrigger Animation
    useGSAP(() => {

        const mainTL = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSectionRef.current,

                start: "center+=260px center",
                end: "+=775",

                scrub: 1.6,

                pin: true,
                pinSpacing: true,
            },
            defaults: { ease: "expo" }
        })

        mainTL.to(
            aboutClipPathRef.current,
            {
                morphSVG: {
                    shape: "M 0 0 L 1 0 L 1 1 L 0 1 Z"
                },
                scale: 1.15,
            }
        );

        mainTL.to(
            aboutImgRef.current,
            {
                y: -100
            },
            "<"
        );

    });

    // onEnter: () => {
    //     mouseInteractionEnabledRef.current = false;

    //     gsap.to(aboutWindowRef.current, {
    //         x: 0,
    //         y: 0,
    //         rotateX: 0,
    //         rotateY: 0,
    //         duration: 0.4,
    //         ease: "power2.out",
    //     });
    // },

    // onLeave: () => {
    //     mouseInteractionEnabledRef.current = true;
    // },

    // onEnterBack: () => {
    //     mouseInteractionEnabledRef.current = false;

    //     gsap.to(aboutWindowRef.current, {
    //         x: 0,
    //         y: 0,
    //         rotateX: 0,
    //         rotateY: 0,
    //         duration: 0.4,
    //         ease: "power2.out",
    //     });
    // },

    // onLeaveBack: () => {
    //     mouseInteractionEnabledRef.current = true;
    // },

    // ! About Image Window Mouse Move Interaction 
    // ! Stoped For The Window Reveal ScrollTriggerd Animation
    // useEffect(() => {

    //     aboutSectionRef.current.addEventListener("mousemove", (e) => {

    //         if (!mouseInteractionEnabledRef.current) return;

    //         // Mouse Follow Effect
    //         let moveX = (e.pageX / aboutSectionRef.current.clientWidth) * 20;
    //         let moveY = (e.pageY / aboutSectionRef.current.clientHeight) * 20;

    //         // Tilt Effect
    //         const rect = aboutSectionRef.current.getBoundingClientRect();
    //         const x = (e.clientX - rect.left) / rect.width - 0.5;
    //         const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    //         gsap.to(aboutWindowRef.current, {

    //             x: moveX,
    //             y: moveY,

    //             rotateX: x * 18,
    //             rotateY: -y * 18,

    //             duration: 0.8,
    //             ease: "power3.out",
    //         });

    //     });

    // }, []);

    return (
        <Element name="about">
            <section ref={aboutSectionRef} className="relative h-[200vh] pt-26 pb-26 px-8 flex-col-center justify-between">
                <div className="flex-col-center gap-12">
                    <span className="font-general tracking-tight uppercase text-sm">Welcome To Zentry</span>

                    <h1 className="font-zentry text-[94px] leading-[0.92] max-md:text-[72px] max-sm:text-[60px] text-center">
                        Discover the world's <br />
                        largest shared adventure, <br />
                        crafted be everyone
                    </h1>
                </div>

                {/* The Animated Part of this Section */}
                <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full h-full overflow-hidden">

                    {/* ClipPath Animated Layer */}
                    <div 
                        ref={aboutWindowRef}
                        className="absolute z-2 top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex-center-all size-full"
                        style={{
                            clipPath: "url(#about-clipPath)",
                        }}
                    >
                        {/* Full Size Image */}
                        <img 
                            ref={aboutImgRef}
                            src="/images/about.webp" 
                            alt="about" 
                            className={"absolute z-1 top-1/2 left-1/2 -translate-1/2 size-full object-cover"}
                        />
                    </div>

                    {/* ClipPath SVG Corners Rounder */}
                    <svg
                        style={{
                            position: "absolute",
                            width: 0,
                            height: 0,
                            pointerEvents: "none",
                        }}
                        >
                        <defs>
                            <clipPath id="about-clipPath" clipPathUnits="objectBoundingBox">
                            <path
                                ref={aboutClipPathRef}
                                d="M 0.319943295607 0.305165199571
                                L 0.624056704393 0.334834800429
                                Q 0.636 0.336 0.634493037763 0.347905001672
                                L 0.597506962237 0.640094998328
                                Q 0.596 0.652 0.584172532942 0.654027565781
                                L 0.327827467058 0.697972434219
                                Q 0.316 0.7 0.315757625212 0.68800244798
                                L 0.308242374788 0.31599755202
                                Q 0.308 0.304 0.319943295607 0.305165199571
                                Z"
                            />
                            </clipPath>
                        </defs>
                        </svg>

                </div>

                <div className="flex-col-center text-center">
                    <h4 className="text-[15px] md:text-[17px] font-medium">The Game of Games begins - your life, now an epic MMORPG</h4>
                    <p className="text-[15px] md:text-[17px] font-medium text-neutral-500 tracking-[0.12px]">
                        Zentry unites the every player from countless games and platforms, <br className="max-sm:hidden" />
                        both digital and physical, into a united Play Economy
                    </p>
                </div>
            </section>
        </Element>
    );
};

export default About;
