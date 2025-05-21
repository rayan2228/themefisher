import leftShape from "@/app/assets/images/left-shape.png";
import meImg from "@/app/assets/images/me.png";
import rightShape from "@/app/assets/images/right-shape.png";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Copywrite from "./Copywrite";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import PricePlan from "./PricePlan";
const Hero = () => {
    return (
        <section className="mt-25 ">
            <Navbar />
            <Image src={leftShape} alt="leftbg" className="object-cover fixed lg:top-66 left-0 hidden lg:block" />
            <Image src={rightShape} alt="rightbg" className="object-cover fixed lg:top-54 right-0 hidden lg:block" />
            <Copywrite />
            <div className="lg:px-23">
                <div className="lg:fixed">
                    <div className="lg:min-w-[368px] w-full bg-black flex flex-col justify-center items-center py-5 lg:py-0">
                        <Image src={meImg} alt="Daryl-Smith-Image " />
                        <SocialIcons />
                    </div>
                </div>
                <div className="container">
                    <div className="pt-10 pb-14 sm:ml-0 3xl:ml-[800px] 2xl:ml-[220px] lg:ml-[300px] xl:ml-[410px]  ">
                        <Introduction />
                        <About />
                        <Portfolio />
                        <Blog />
                        <PricePlan />
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero