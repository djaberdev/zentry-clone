import { useRef } from "react";

import { Element } from "react-scroll";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const aboutSectionRef = useRef(null);
    const aboutImgRef = useRef(null);

    // ScrollTrigger Animation
    useGSAP(() => {

        gsap.fromTo(
            aboutImgRef.current,
            {
                scale: 0.35,
                clipPath: "polygon(50% 15%, 85% 50%, 50% 85%, 15% 50%)",
            },
            {
                scale: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: aboutImgRef.current,
                    start: "center center",
                    end: "+=550",
                    scrub: 0.72,
                    pin: true,
                    pinSpacing: true
                },
            }
        );

    });

    return (
        <Element name="about">
            <section ref={aboutSectionRef} className="relative h-[160vh] pt-26 pb-22 px-8 flex-col-center justify-between mb-[680px]">
                <div className="flex-col-center gap-12">
                    <span className="font-general tracking-tight uppercase text-sm">Welcome To Zentry</span>

                    <h1 className="font-zentry text-[94px] leading-[0.92] max-md:text-[72px] max-sm:text-[60px] text-center">
                        Discover the world's <br />
                        largest shared adventure, <br />
                        crafted be everyone
                    </h1>
                </div>

                <img 
                    ref={aboutImgRef}
                    src="/images/about.webp" 
                    alt="about" 
                    className="absolute top-[62%] left-1/2 -translate-1/2 size-full object-cover"
                />

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