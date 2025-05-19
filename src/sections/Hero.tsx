import Image from "next/image"
import meImg from "@/app/assets/images/me.png"
import SocialIcons from "@/components/SocialIcons"
const Hero = () => {
    return (
        <section className="flex px-23">
            <div className=" min-w-[368px] bg-black flex flex-col justify-center items-center">
                <Image src={meImg} alt="me"/>
                <SocialIcons/>
            </div>
        </section>
    )
}

export default Hero