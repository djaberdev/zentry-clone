import { Link } from "react-scroll";

const Navlink = ({ navlinkObj }) => {
    return (
        <Link
            to={navlinkObj.to}
            smooth
            offset={-20}
            spy
            className="relative cursor-pointer group"
            activeClass="active-navlink"
        >
            <div className="line absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-light-gray duration-500 group-hover:w-full"></div>
            {
                navlinkObj.linkType === "internal" ? (
                    <span className="label font-general uppercase text-sm  text-light-gray">{navlinkObj.label}</span>
                ) : (
                    <div className="flex items-center flex-row-reverse gap-1.5">
                        <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1792" xmlSpace="preserve" className="arrow fill-light-gray size-[12px] transform-[rotate(-140deg)_rotateX(20deg)_rotateY(40deg)] -translate-y-[1px] duration-500 group-hover:transform-[rotate(-115deg)_rotateX(10deg)_rotateY(20deg)]">
                            <g strokeWidth="0"></g>
                            <g strokeLinecap="round" strokeLinejoin="round"></g>
                            <g >
                                <path d="M1604.2,132.9L896,1659L187.8,132.9L896,506.4L1604.2,132.9z"></path>
                            </g>
                        </svg>
                        <span className="label font-general uppercase text-sm text-light-gray">{navlinkObj.label}</span>
                    </div>
                )
            }
        </Link>
    );
};

export default Navlink;