import homeIcon from "@/app/assets/icons/home.svg"
import Button from "@/components/Button"
import Image from "next/image"
const Header = () => {
    return (
        <header className="flex sm:flex-row flex-col px-5 lg:px-23 py-6 sm:items-center gap-2 sm:gap-0 bg-bg-two w-full fixed z-50 top-0 left-0 ">
            <div className="sm:max-w-[368px] w-full sm:after:content-[''] sm:after:w-[1px] sm:after:h-[180%] sm:after:bg-bg-three  sm:after:absolute sm:after:top-[-24] sm:after:right-0 relative">
                <Image src={"/logo.png"} alt="Daryl-Smith" width={180} height={32} />
                <h6 className="text-sm text-text-one">UI/UX designer</h6>
            </div>
            <div className="container">
                <div className="flex items-center  justify-between flex-1 sm:ml-10">
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-sm flex items-center justify-center gradient-bg">
                            <Image src={homeIcon} alt="home-icon" className="invert  brightness-0" />
                        </span>
                        <h5 className="font-bold text-2xl">Home</h5>
                    </div>
                    <Button css="rounded-full" />
                </div>
            </div>
        </header>
    )
}

export default Header