import ZentryLogo from "../components/svg/ZentryLogo";

import { FooterLink } from "../components";
import { useRef } from "react";

const Footer = () => {

    const footerRef = useRef(null);
    const headingRef = useRef(null);

    const handleMouseMove = (e) => {
        const footer = footerRef.current;
        const heading = headingRef.current;

        if (!footer || !heading) return;

        const rect = footer.getBoundingClientRect();

        // Mouse position: -1 → 1
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        // Control the intensity
        const rotateX = y * -8;
        const rotateY = x * 8;

        heading.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        `;
    };

    const handleMouseLeave = () => {
        if (!headingRef.current) return;

        headingRef.current.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        `;
    };

    return (
        <footer 
            className="relative w-full min-h-screen bg-primary-purple"
            ref={footerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            
            {/* Huge Heading */}
            <div className="w-full h-5/10 flex-center-all">
                <h1 
                    ref={headingRef}
                    className="font-zentry text-black leading-[0.92] tracking-wider whitespace-nowrap text-center translate-x-2"
                    style={{
                        fontSize: "35vw",
                        transformOrigin: "center center",
                        transition: "transform 0.15s ease-out",
                        willChange: "transform",
                    }}
                >ZENTRY</h1>
            </div>

            {/* Links Control */}
            <div className="relative w-full px-13 py-13 flex items-start">
                
                {/* Logo */}
                <ZentryLogo 
                    width={160}
                    height={160}
                    fill={"black"}
                    fillClasses={"-translate-y-7"}
                    classes={"flex max-xl:hidden"}
                />

                {/* Links */}
                <div 
                    className="flex-1 grid gap-4.5 max-lg:gap-14 max-md:gap-18 ml-10 max-xl:ml-0"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"
                    }}
                >
                    
                    {/* Navbar Links */}
                    <div className="w-full flex-col-start gap-6">
                        <span className="font-general uppercase text-[12px] font-medium text-black translate-x-3 max-xl:translate-x-4.5">Explore</span>

                        <div className="flex-col-start gap-0.5">
                            <FooterLink
                                href={"/"}
                                text={"Home"}
                                rotation={"rotateX(329deg) rotateY(185deg)"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"Prologue"}
                                rotation={"rotateX(25deg) rotateY(187deg)"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"About"}
                                rotation={"rotateX(329deg) rotateY(185deg)"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"Contact"}
                                rotation={"rotateX(25deg) rotateY(187deg)"}
                            />
                        </div>
                    </div>
                    
                    {/* Products */}
                    <div className="w-full flex-col-start gap-6">
                        <span className="font-general uppercase text-[12px] font-medium text-black translate-x-3 max-xl:translate-x-4.5">Products</span>

                        <div className="flex-col-start gap-0.5">
                            <FooterLink
                                href={"/"}
                                text={"Radiant"}
                                isAnimated={false}
                                textClasses={"text-black! opacity-30!"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"Nexus"}
                                isAnimated={true}
                                rotation={"rotateX(329deg) rotateY(185deg)"}
                                classes={"flex items-center gap-1"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-5 translate-y-0.5 fill-black duration-500 group-hover:fill-primary-purple group-hover:translate-y-0"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                                </svg>
                            </FooterLink>
                            <FooterLink
                                href={"/"}
                                text={"Zigma"}
                                isAnimated={false}
                                textClasses={"text-black! opacity-30!"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"Azul"}
                                isAnimated={false}
                                textClasses={"text-black! opacity-30!"}
                            />
                        </div>
                    </div>
                    
                    {/* Social Media */}
                    <div className="w-full flex-col-start gap-6">
                        <span className="font-general uppercase text-[12px] font-medium text-black translate-x-3 max-xl:translate-x-4.5">Follow US</span>

                        <div className="flex-col-start gap-0.5">
                            <FooterLink
                                href={"/"}
                                text={"Discord"}
                                rotation={"rotateX(329deg) rotateY(185deg)"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"X"}
                                rotation={"rotateX(25deg) rotateY(187deg)"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"Youtube"}
                                rotation={"rotateX(329deg) rotateY(185deg)"}
                            />
                            <FooterLink
                                href={"/"}
                                text={"Medium"}
                                rotation={"rotateX(25deg) rotateY(187deg)"}
                            />
                        </div>
                    </div>
                    
                    {/* Resources */}
                    <div className="w-full flex-col-start gap-6">
                        <span className="font-general uppercase text-[12px] font-medium text-black translate-x-3 max-xl:translate-x-4.5">Resources</span>

                        <FooterLink
                            href={"/"}
                            text={"Media Kit"}
                            rotation={"rotateX(329deg) rotateY(185deg)"}
                        />
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;