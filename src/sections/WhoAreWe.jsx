import { Magnet } from "../components";

const WhoAreWe = () => {
    return (
        <section className="min-h-screen flex-center-all py-25 px-20">
            <div className="flex-col-center gap-6">

                <span className="font-general uppercase text-[12px] font-medium">Who We Are</span>

                <h1 className="max-w-[568px] font-zentry text-[100px] max-md:text-[80px] max-sm:text-[60px] leading-[0.86] text-black uppercase text-center">
                    WE'RE BUILDING A NEW <Magnet padding={16} magnetStrength={1.2} wrapperClassName="cursor-grab relative inline-block" innerClassName="inline-block relative mx-5 max-md:mx-3.5 bg-black w-8 h-8 top-[-26px] max-md:top-[-15px] max-sm:top-[-6px] rounded-lg group"><img className="absolute left-1/2 top-1/2 -translate-1/2 w-10 h-10 object-cover duration-300 rounded-lg ring-1 ring-black opacity-10 group-hover:opacity-100 group-hover:scale-[2] group-hover:w-16 group-hover:h-12 group-hover:rotate-[3deg] max-md:w-9 max-md:h-9 max-sm:w-[30px] max-sm:h-[30px] max-md:opacity-100" src="/images/gallery-2.webp" alt="Zentry_Gallery_01" /></Magnet> REALITY <br />
                    THAT REWARDS PLAYERS <Magnet padding={16} magnetStrength={1.2} wrapperClassName="cursor-grab relative inline-block" innerClassName="inline-block relative mx-5 max-md:mx-3.5 bg-black w-8 h-8 top-[-26px] max-md:top-[-15px] max-sm:top-[-6px] rounded-lg group"><img className="absolute left-1/2 top-1/2 -translate-1/2 w-10 h-10 object-cover duration-300 rounded-lg ring-1 ring-black opacity-10 group-hover:opacity-100 group-hover:scale-[2] group-hover:w-16 group-hover:h-12 group-hover:rotate-[-4deg] max-md:w-9 max-md:h-9 max-sm:w-[30px] max-sm:h-[30px] max-md:opacity-100" src="/images/gallery-3.webp" alt="Zentry_Gallery_02" /></Magnet> AND <br />
                    ENCOURAGES <br />
                    COMMUNITIES <br />
                    TO <Magnet padding={16} magnetStrength={1.2} wrapperClassName="cursor-grab relative inline-block" innerClassName="inline-block relative mx-5 max-md:mx-3.5 bg-black w-8 h-8 top-[-26px] max-md:top-[-15px] max-sm:top-[-6px] rounded-lg group"><img className="absolute left-1/2 top-1/2 -translate-1/2 w-10 h-10 object-cover duration-300 rounded-lg ring-1 ring-black opacity-10 group-hover:opacity-100 group-hover:scale-[2] group-hover:w-16 group-hover:h-12 group-hover:rotate-[4deg] max-md:w-9 max-md:h-9 max-sm:w-[30px] max-sm:h-[30px] max-md:opacity-100" src="/images/gallery-5.webp" alt="Zentry_Gallery_03" /></Magnet> THRIVE
                </h1>

                <p className="text-[15px] text-dark-gray max-w-[520px] text-center"><span className="font-medium mr-1">ZENTRY</span>is on a mission to unite diverse player networks to forge the world's largest shared adventure</p>

                <button className="flex items-center gap-3.5 py-2.5 px-6 rounded-full bg-black ring-2 ring-primary-yellow/0 duration-300 hover:ring-primary-yellow/100 cursor-pointer">
                    <span className="font-general uppercase text-[12px] text-white">Discover Who We Are</span>
                </button>

            </div>
        </section>
    );
};

export default WhoAreWe;