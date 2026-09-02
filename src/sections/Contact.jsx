import { Element } from "react-scroll";

import { CursorGrid } from "../components";

const Contact = () => {
    return (
        <Element name="contact">
            <section className="h-screen w-full flex-center-all px-12 py-18">
                <div className="relative w-full h-full bg-black rounded-2xl flex-center-all overflow-hidden">
                    
                    {/* Text Layer */}
                    <div className="relative z-1 flex-col-center gap-8">
                        <span className="font-general uppercase text-[12px] font-medium text-light-gray">Join ZENTRY</span>

                        <h1 className="font-zentry text-[80px] max-md:text-[70px] max-sm:text-[52px] leading-[0.9] text-light-gray uppercase text-center">
                            Let's Build The <br />
                            New Era Of Gaming <br />
                            Together.
                        </h1>

                        <button className="flex-center-all py-2.5 px-6 rounded-full bg-light-gray/90 hover:bg-light-gray duration-300 cursor-pointer">
                            <span className="font-general uppercase text-[13px] font-medium">Contact Us</span>
                        </button>
                    </div>

                    {/* Cursor Grid Layer */}
                    <CursorGrid
                        cellSize={85}
                        className="rounded-2xl hidden max-lg:flex"
                    />

                    {/* 
                        Images Layer 
                    */}

                        {/* Top One */}
                        <img 
                            src="/images/contact-1.webp" 
                            alt="Contact-01" 
                            className="absolute -top-14 left-[14%] size-70 rounded-2xl object-cover max-lg:hidden" 
                            style={{
                                clipPath: "polygon(14% 3%, 85% 0, 83% 64%, 25% 76%)",
                                transform: "rotateX(-20deg) rotate(-6deg)",
                                filter: "url(#round-corners)",
                            }}
                        />

                        {/* Bottom One */}
                        <img 
                            src="/images/contact-2.webp" 
                            alt="Contact-02" 
                            className="absolute -bottom-20 left-1/10 size-86 rounded-2xl object-cover max-lg:hidden" 
                            style={{
                                clipPath: "polygon(19% 13%, 78% 30%, 88% 94%, 6% 87%)",
                                transform: "rotateX(26deg) rotate(6deg)",
                                filter: "url(#round-corners)",
                            }}
                        />

                        {/* Swordman One */}
                        <img 
                            src="/images/swordman.webp" 
                            alt="Contact-02" 
                            className="absolute top-1/2 -translate-y-1/2 right-0 size-90 rounded-2xl object-cover max-lg:hidden" 
                            style={{
                                clipPath: "polygon(2% 1%, 84% 9%, 74% 88%, 4% 100%)",
                                filter: "url(#round-corners)",
                            }}
                        />

                        {/* For Clip-Path Rounded Corners */}
                        <svg width="0" height="0">
                            <filter id="round-corners">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" 
                                values="1 0 0 0 0  
                                        0 1 0 0 0  
                                        0 0 1 0 0  
                                        0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                            </filter>
                        </svg>

                </div>
            </section>
        </Element>
    );
};

export default Contact;