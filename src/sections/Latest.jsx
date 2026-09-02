import { useRef } from "react";

import { lastestUpdates } from "../constants";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Latest = () => {

    const container = useRef(null);
    const leftSectionRef = useRef(null);

    // The Pinning Animation
    useGSAP(() => {

        // 1. Initialize matchMedia
        const mm = gsap.matchMedia();

        // 2. This Animation Will Run only on Desktop
        mm.add("(min-width: 768px)", () => {
            
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: "bottom+=80px bottom",
                pin: leftSectionRef.current,
            })

        });

    }, {scope: container})

    return (
        <section ref={container} className="w-full px-16 py-32 min-h-screen flex flex-row max-md:gap-25 max-md:flex-col items-start justify-between ">
            
            {/* The Text Part — Right */}
            <div ref={leftSectionRef} className="flex flex-col items-start gap-6 w-auto">
                <h1 className="font-zentry text-[100px] max-lg:text-[88px] leading-[0.9] font-medium tracking-[0.3px]">
                    Latest <br />
                    Uploads
                </h1>

                <p className="font-meduim leading-[1.5] text-neutral-800 max-w-80">Stay Updated with the latest news, events and Updates in our ecosystem. Be part of our universe's growth and evolution.</p>                

                <a target="_blank" href="https://medium.com/zentry" className="flex items-center gap-3 py-2.5 px-6 rounded-full bg-black duration-300 hover:bg-black/95 cursor-pointer">
                    <span className="font-general uppercase text-[12px] font-medium text-light-gray">Read All News</span>
                    <img 
                        src="/images/medium.png" 
                        alt="Medium" 
                        className="size-5" 
                    />
                </a>
            </div>

            {/* The Text Part — Left */}
            <div className="flex-1 flex justify-end">
                <div className="flex-col-center w-7/10 max-lg:w-[85%] max-md:w-full gap-25 h-full">
                    {
                        lastestUpdates.map((item, index) => (
                            <div key={index + 1} className="flex-col-center gap-7">

                                {/* Image Layer */}
                                <img 
                                    src={item.img} 
                                    alt={`Updates-img-${index + 1}`}
                                    className="w-full h-80 max-md:h-74 rounded-lg ring ring-neutral-950 object-cover"
                                />
                                

                                {/* Info Layer */}
                                <div className="w-full flex items-start justify-between flex-wrap gap-2">
                                    <span className="font-mono text-[12px]">{item.date}</span>

                                    <p className="text-[17px] max-md:text-[16px] -translate-y-1 tracking-wide">{item.title}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default Latest;