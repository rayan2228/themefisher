const Button = ({ text = "Talk To Me", css = "rounded-md" }: { text?: string, css?: string }) => {
    return (
        <div className="relative group inline-block ">
            <div className={`absolute inset-0 ${css} gradient-bg p-[2px]`}>
                <div className={`bg-black ${css} h-full w-full group-hover:gradient-bg transition-all duration-300`}></div>
            </div>
            <button className="relative z-10 px-6 py-3 cursor-pointer rounded-md font-semibold text-base  hover:gradient-hover gradient-text transition-all duration-300 ">
                {text}
            </button>
        </div>
    );
};

export default Button;
