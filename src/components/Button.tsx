
const Button = ({ text = "Talk To Me" }: { text?: string }) => {
    return (
        <div className="relative group ">
            <div className="absolute inset-0 rounded-full gradient-bg p-[2px]"
            >
                <div className="bg-bg-one rounded-full h-full w-full"></div>
            </div>
            {/* Button content */}
            <button className="relative z-10 px-6 py-3 cursor-pointer  rounded-full font-semibold text-base gradient-text">
                {text}
            </button>
        </div>
    )
}

export default Button