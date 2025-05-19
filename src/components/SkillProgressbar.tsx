"use client"
import ProgressBar from "@ramonak/react-progress-bar"

const SkillProgressbar = () => {
    return (
        <div className="mt-8 max-w-[885px]">
            <div className="flex justify-between items-center font-medium mb-2.5 ">
                <h6 className="text-2xl">UI/UX Design</h6>
                <span className="text-xl gradient-text">95%</span>
            </div>
            <ProgressBar completed="6" maxCompleted={10} completedClassName="gradient-bg-two" labelSize="0" baseBgColor="#5B401E" borderRadius="50px" />
        </div>
    )
}

export default SkillProgressbar