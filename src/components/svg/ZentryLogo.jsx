import clsx from "clsx";

const ZentryLogo = ({ width, height, fill, fillClasses, classes }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 120 100.8"
        xmlSpace="preserve"
        width={width}
        height={height}
        className={clsx("translate-y-2 -translate-x-[28px]", classes)}
    >
        <path
            fill={fill}
            opacity={1}
            stroke="none"
            d="M48.473 52.637c3.067 -4.75 6.022 -9.312 9.379 -14.494l2.086 10.368H79.44l0.141 0.598 -37.077 12.836c2.239 -3.488 4.051 -6.305 5.968 -9.307"
            strokeWidth={0.5999999999999999}
            className={fillClasses}
        />
        <path
            fill={fill}
            opacity={1}
            stroke="none"
            d="M45.897 32.148A21422.955 21422.955 0 0 1 77.121 21.37l0.581 0.669 -14.544 22.663 -2.138 -10.342h-19.354l-0.163 -0.638c1.392 -0.494 2.784 -0.989 4.392 -1.574"
            strokeWidth={0.5999999999999999}
            className={fillClasses}
        />
    </svg>
);

export default ZentryLogo;
