"use client"

import Button from "@/components/Button"
import { NavIconContext } from "@/contextAPI"
import Image, { StaticImageData } from "next/image"
import { use } from "react"

import aboutWhiteIcon from "@/app/assets/icons/aboutWhite.svg"
import blogWhiteIcon from "@/app/assets/icons/blogWhite.svg"
import contactWhiteIcon from "@/app/assets/icons/contactWhite.svg"
import homeWhiteIcon from "@/app/assets/icons/homeWhite.svg"
import portfolioWhiteIcon from "@/app/assets/icons/portfolioWhite.svg"

const iconMap: Record<string, StaticImageData> = {
    home: homeWhiteIcon,
    about: aboutWhiteIcon,
    blog: blogWhiteIcon,
    contact: contactWhiteIcon,
    portfolio: portfolioWhiteIcon,
}

const labelMap: Record<string, string> = {
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    portfolio: "Portfolio",
}

const Header = () => {
    const { active } = use(NavIconContext)
    const activeIcon = iconMap[active] || homeWhiteIcon
    const activeLabel = labelMap[active] || "Home"

    return (
        <header className="flex sm:flex-row flex-col px-5 lg:px-23 py-6 sm:items-center gap-2 sm:gap-0 bg-bg-two w-full fixed z-50 top-0 left-0">
            <div className="sm:max-w-[368px] w-full sm:after:content-[''] sm:after:w-[1px] sm:after:h-[180%] sm:after:bg-bg-three  sm:after:absolute sm:after:top-[-24] sm:after:right-0 relative">
                <Image src={"/logo.png"} alt="Daryl-Smith" width={180} height={32} />
                <h6 className="text-sm text-text-one">UI/UX designer</h6>
            </div>
            <div className="container">
                <div className="flex items-center justify-between flex-1 sm:ml-10">
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-sm flex items-center justify-center gradient-bg">
                            <Image src={activeIcon} alt={`${active}-icon`} />
                        </span>
                        <h5 className="font-bold text-2xl">{activeLabel}</h5>
                    </div>
                    <Button css="rounded-full" link="#contact" />
                </div>
            </div>
        </header>
    )
}

export default Header
