import Link from "next/link";

const Button = ({ text = "Talk To Me", css = "rounded-md", link = "#" }: { text?: string, css?: string, link?: string }) => {
    return (
        <div className="relative group inline-block ">
            <div className={`absolute inset-0 ${css} gradient-bg p-[2px]`}>
                <div className={`bg-black ${css} h-full w-full group-hover:gradient-bg transition-all duration-300`}></div>
            </div>
            <Link href={link} className="relative z-10 sm:px-6 px-3 sm:py-3 py-2 cursor-pointer rounded-md font-semibold text-base  hover:gradient-hover gradient-text transition-all duration-300 inline-block ">
                {text}
            </Link>
        </div>
    );
};

export default Button;
