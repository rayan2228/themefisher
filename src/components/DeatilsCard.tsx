import lineImg from "@/app/assets/images/line.png";
import Image from "next/image";
import { Fragment } from "react";

const DeatilsCard = ({
    data,
    alt = "timeline line"
}: {
    data: { year: string; title: string; subtitle: string; description: string }[];
    alt?: string;
}) => {
    return (
        <div className="flex gap-3.5">
            <Image src={lineImg} alt={alt} />
            <div className="flex flex-col gap-6.5">
                {data.map((item, index) => {
                    const { year, title, subtitle, description } = item;
                    return (
                        <Fragment key={index}>
                            <div className="mt-2.5 w-auto lg:max-w-[646px]">
                                <h4 className="font-bold text-sm border rounded-sm inline-block px-2 py-1 border-white/20">
                                    {year}
                                </h4>
                                <div className="bg-bg-two mt-3 p-5">
                                    <span className="font-bold text-lg gradient-text">{title}</span>
                                    <h5 className="text-xs mt-2 mb-8 text-text-three">{subtitle}</h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default DeatilsCard;
