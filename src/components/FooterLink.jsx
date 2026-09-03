import clsx from 'clsx';

const FooterLink = ({ href, text, isAnimated = true, classes, textClasses, rotation, children }) => {
    return (
        <a 
            href={href}
            className={clsx("relative py-2.5 px-4.5 group", classes)}
        >
            {/* Animated BG Layer */}
            {
                isAnimated && (
                    <div 
                        className="absolute z-0 inset-0 w-9/10 group-hover:w-full h-9/10 group-hover:h-full bg-black duration-500 opacity-0 group-hover:opacity-100 rounded-lg"
                        style={{
                            transform: rotation,
                            perspective: "800px",
                            transformStyle: "preserve-3d",
                        }}
                    />
                )
            }

            <span className={clsx("relative text-[18px] font-medium text-black duration-400 group-hover:text-primary-purple", textClasses)}>{text}</span>
            
            {children}

        </a>
    );
};

export default FooterLink;