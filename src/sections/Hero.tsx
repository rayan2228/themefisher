import leftShape from "@/app/assets/images/left-shape.png";
import meImg from "@/app/assets/images/me.png";
import rightShape from "@/app/assets/images/right-shape.png";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import About from "./About";
import Blog from "./Blog";
import Copywrite from "./Copywrite";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import PricePlan from "./PricePlan";
const Hero = () => {
    return (
        <section className=" mt-27">
            <Navbar />
            <Image src={leftShape} alt="bg" className="object-cover fixed bottom-50 left-0" />
            <Image src={rightShape} alt="bg" className="object-cover fixed bottom-50 right-0" />
            <Copywrite />
            <div className="px-23">
                <div className="fixed">
                    <div className="min-w-[368px] bg-black flex flex-col justify-center items-center ">
                        <Image src={meImg} alt="me" />
                        <SocialIcons />
                    </div>
                </div>
                <div className="container">
                    <div className="pt-10 pb-14  ml-[220px]">
                        <Introduction />
                        <About />
                        <Blog />
                        <PricePlan />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero