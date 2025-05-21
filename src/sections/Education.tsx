import educationIcon from "@/app/assets/icons/education.svg"
import DeatilsCard from "@/components/DeatilsCard"
import SecondaryTitle from '@/components/SecondaryTitle'
const educationDetails = [
    {
        "year": "2022 - 2023",
        "title": "Harvard University",
        "subtitle": "RB.A. and M.S., Computer Science",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
    },
    {
        "year": "2022 - 2023",
        "title": "BHelwan University",
        "subtitle": "Bachelor Degree",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
    }
]

const Education = () => {
    return (
        <section className="mt-11">
            <SecondaryTitle icon={educationIcon} alt="education" title="Education" />
            <div className="mt-8">
                <DeatilsCard data={educationDetails} alt="education-timeline-line" />
            </div>
        </section>
    )
}

export default Education