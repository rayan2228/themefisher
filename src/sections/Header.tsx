import homeIcon from "@/app/assets/icons/home.svg"
import Button from "@/components/Button"
import Image from "next/image"
const Header = () => {
    return (
        <header className="flex px-23 py-6 items-center bg-bg-two ">
            <div className="min-w-[460px] after:content-[''] after:w-[1px] after:h-[180%] after:bg-bg-three  after:absolute after:top-[-24] after:right-0 relative">
                <Image src={"/logo.png"} alt="logo" width={180} height={32} />
                <h6 className="text-lg text-text-one">UI/UX designer</h6>
            </div>
            <div className="flex items-center  justify-between flex-1 ml-10">
                <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-md flex items-center justify-center gradient-bg">
                        <Image src={homeIcon} alt="home" className="invert  brightness-0" />
                    </span>
                    <h5 className="font-bold text-2xl">Home</h5>
                </div>
                <Button />
            </div>
        </header>
    )
}

export default Header