import facebookIcon from "@/app/assets/icons/facebook.svg"
import linkedinIcon from "@/app/assets/icons/linkedin.svg"
import pinterestIcon from "@/app/assets/icons/pinterest.svg"
import instagramIcon from "@/app/assets/icons/instagram.svg"
import twitterIcon from "@/app/assets/icons/twitter.svg"
import Image from "next/image"
import Link from "next/link"

const socialDetails = [
    {
        "name": "facebook",
        "url": "https://www.facebook.com/",
        "icon": facebookIcon
    },
    {
        "name": "linkedin",
        "url": "https://www.linkedin.com/",
        "icon": linkedinIcon
    },
    {
        "name": "pinterest",
        "url": "https://www.pinterest.com/",
        "icon": pinterestIcon
    },
    {
        "name": "instagram",
        "url": "https://www.instagram.com/",
        "icon": instagramIcon
    },
    {
        "name": "twitter",
        "url": "https://twitter.com/",
        "icon": twitterIcon
    },
]

const SocialIcons = () => {
    return (
        <div className="flex gap-4 items-center py-3.5">
            {
                socialDetails.map((item, index) => {
                    return (
                        <Link key={index} href={item.url} target="_blank" className="w-8 h-8 rounded-full flex items-center justify-center bg-bg-four">
                            <Image src={item.icon} alt={item.name} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default SocialIcons