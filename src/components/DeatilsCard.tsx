import lineImg from "@/app/assets/images/line.png";
import Image from "next/image";
import { Fragment } from "react";

const DeatilsCard = ({ data }: { data: { year: string; title: string; subtitle: string; description: string; }[] }) => {
    return (
        <div className="flex gap-3.5 ">
            <Image src={lineImg} alt="line" />
            <div className="flex flex-col gap-6.5">
                {
                    data.map((item, index) => {
                        const { year, title, subtitle, description } = item
                        return (
                            <Fragment key={index}>
                                <div className="mt-2.5 max-w-[646px]">
                                    <h4 className='font-bold text-sm border rounded-sm inline-block px-2 py-1 border-white/20'>{year}</h4>
                                    <div className="bg-bg-two mt-3 p-5">
                                        <span className='font-bold text-lg gradient-text'>{title}</span>
                                        <h5 className="text-xs mt-2 mb-8 text-text-three">{subtitle}</h5>
                                        <p className="">{description}</p>
                                    </div>
                                </div>
                            </Fragment>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default DeatilsCard