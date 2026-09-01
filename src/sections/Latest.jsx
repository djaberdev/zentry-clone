
const Latest = () => {
    return (
        <section className="w-full px-16 py-16 bg-red-200/10 min-h-screen">
            
            {/* The Section Intro Text */}
            <div className="flex flex-col items-start gap-6">
                <h1 className="font-zentry text-[100px] leading-[0.9] font-medium tracking-[0.3px]">
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

        </section>
    );
};

export default Latest;