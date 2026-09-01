import gsap from "gsap";
import { useEffect, useRef } from "react";

const BadgePlayable = ({ color }) => {

    const badgeRef = useRef(null);
    const badgePlayableRef = useRef(null);

    useEffect(() => {

        function handleMove(e) {

            const rect = badgeRef.current.getBoundingClientRect();

            let x = e.clientX - rect.left - 10;
            let y = e.clientY - rect.top - 10;

            gsap.to(
                badgePlayableRef.current,
                {
                    x: x,
                    y: y,
                    duration: 0.2,
                }
            )

        }

        badgeRef.current.addEventListener("mousemove", (event) => handleMove(event));

    }, []);

    return (
        <div ref={badgeRef} className="absolute z-1 bottom-6 left-6 py-2.5 px-4 ring-[1.5px] ring-neutral-600/50 bg-[#080808] rounded-full flex items-center gap-3 overflow-hidden w-[138px]">
            <svg height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1792" xmlSpace="preserve" className="arrow fill-neutral-600
            /50 size-[14px] transform-[rotate(-140deg)_rotateX(20deg)_rotateY(40deg)] -translate-y-[1px] duration-500 group-hover:transform-[rotate(-115deg)_rotateX(10deg)_rotateY(20deg)]">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g >
                    <path d="M1604.2,132.9L896,1659L187.8,132.9L896,506.4L1604.2,132.9z"></path>
                </g>
            </svg>
            <span className="text-neutral-600 text-xs font-general font-medium uppercase select-none">Coming Soon</span>

            {/* Playable Dot */}
            <div 
                ref={badgePlayableRef} 
                className={`absolute top-0 left-0 size-[20px] z-0 rounded-full blur-[14px]`}
                style={{ backgroundColor: color }}
            ></div>
        </div>
    )
}

export default BadgePlayable;