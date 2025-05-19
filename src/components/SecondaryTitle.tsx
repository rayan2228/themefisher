import Image from "next/image"

const SecondaryTitle = ({ icon, alt, title }: { icon: string, alt: string, title: string }) => {
    return (
        <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-sm flex justify-center items-center bg-[#333333]">
                <Image src={icon} alt={alt} />
            </span>
            <h3 className='font-bold text-2xl'>{title}</h3>
        </div>
    )
}

export default SecondaryTitle