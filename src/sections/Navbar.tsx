"use client"

import aboutIcon from "@/app/assets/icons/about.svg"
import aboutColorIcon from "@/app/assets/icons/aboutColor.svg"
import blogIcon from "@/app/assets/icons/blog.svg"
import blogColorIcon from "@/app/assets/icons/blogColor.svg"
import contactIcon from "@/app/assets/icons/contact.svg"
import contactColorIcon from "@/app/assets/icons/contactColor.svg"
import homeIcon from "@/app/assets/icons/home.svg"
import homeColorIcon from "@/app/assets/icons/homeColor.svg"
import portfolioIcon from "@/app/assets/icons/portfolio.svg"
import portfolioColorIcon from "@/app/assets/icons/portfolioColor.svg"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const navbarDetails = [
    { name: "Home", url: "/", icon: homeIcon, colorIcon: homeColorIcon },
    { name: "About", url: "#about", icon: aboutIcon, colorIcon: aboutColorIcon },
    { name: "Portfolio", url: "#portfolio", icon: portfolioIcon, colorIcon: portfolioColorIcon },
    { name: "Blog", url: "#blog", icon: blogIcon, colorIcon: blogColorIcon },
    { name: "Contact", url: "#contact", icon: contactIcon, colorIcon: contactColorIcon },
]

const Navbar = () => {
    const [active, setActive] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            let current = "home"
            for (const item of navbarDetails) {
                if (item.url.startsWith("#")) {
                    const section = document.querySelector(item.url)
                    if (section) {
                        const top = section.getBoundingClientRect().top
                        if (top <= window.innerHeight / 2) {
                            current = item.url.replace("#", "")
                        }
                    }
                }
            }
            setActive(current)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="flex flex-col items-center gap-10 fixed z-30 lg:top-84 -translate-y-1/2 lg:left-8  bg-bg-two lg:bg-transparent left-0 p-4 lg:p-0 top-100 rounded-e-3xl">
            {navbarDetails.map((item) => {
                const sectionName =
                    item.url === "/" ? "home" : item.url.replace("#", "")
                const isActive = active === sectionName

                return (
                    <Link key={item.name} href={item.url}>
                        <Image
                            src={isActive ? item.colorIcon : item.icon}
                            alt={item.name}
                            className="transition-all duration-300"
                        />
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar
