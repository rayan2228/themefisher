import downloadIcon from "@/app/assets/icons/download.svg"
import Title from "@/components/Title"
import Image from 'next/image'

const Introduction = () => {
    return (
        <div className="px-5 lg:px-0">
            <span className='font-bold gradient-text'>INTRODUCTION</span>
            <Title hasRenderedH1={true} text="I&apos;m a Creative Developer &
                UI/UX Design Expert" className="my-2 leading-[130%] lg:max-w-[620px] w-full" />
            <p className='font-bold '>24 years   /   Robert Smith   /   UK London</p>
            <p className='font-medium mt-9 max-w-[591px]'>Prolific, full stack web developer with a passion for metrics and beating former
                &quot;best-yets. Prototyped 25 new product features per year for Flexor, Inc.
                Decreased rework by 22% and costs by 15%. Consistently receive high
                user experience scores for all web development projects, including a
                55% increase for Flexor, Inc. Passionate about building world class web
                applications. One of my sites received a 2020 Webby for Best
                Navigation and Structure.</p>

            <button className="flex gradient-bg px-6 py-3.5 rounded-[50px] gap-2.5 items-center mt-10 cursor-pointer">Downdolad CV <Image src={downloadIcon} alt="download-icon" /></button>
        </div>
    )
}

export default Introduction