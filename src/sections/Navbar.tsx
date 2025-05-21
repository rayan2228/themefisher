import aboutIcon from "@/app/assets/icons/about.svg"
import blogIcon from "@/app/assets/icons/blog.svg"
import contactIcon from "@/app/assets/icons/contact.svg"
import homeIcon from "@/app/assets/icons/home.svg"
import portfolioIcon from "@/app/assets/icons/portfolio.svg"
import Image from "next/image"
import Link from "next/link"
const navbarDetails = [
    {
        name: "Home",
        url: "/",
        icon: homeIcon
    },
    {
        name: "About",
        url: "#about",
        icon: aboutIcon
    },
    {
        name: "Portfolio",
        url: "#portfolio",
        icon: portfolioIcon
    },
    {
        name: "Blog",
        url: "#blog",
        icon: blogIcon
    },
    {
        name: "Contact",
        url: "#contact",
        icon: contactIcon
    }
]
const Navbar = () => {
    return (
        <nav className="flex flex-col items-center gap-10 fixed z-30 top-50 left-8 ">
            {
                navbarDetails.map((item) => {
                    return (
                        <Link key={item.name} href={item.url}><Image src={item.icon} alt={item.name} /></Link>
                    )
                })
            }
        </nav>
    )
}

export default Navbar