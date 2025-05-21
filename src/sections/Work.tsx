import workIcon from "@/app/assets/icons/work.svg"
import DeatilsCard from "@/components/DeatilsCard"
import SecondaryTitle from "@/components/SecondaryTitle"
const workDetails = [
    {
        "year": "2016-2022",
        "title": "UI/UX design",
        "subtitle": "Web site design",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
    },
    {
        "year": "2012-2016",
        "title": "Junior Web  designers",
        "subtitle": "Product designer",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
    }
]
const Work = () => {
    return (
        <section className="mt-11" id="work">
            <SecondaryTitle icon={workIcon} alt="work" title="Work History" />
            <div className="mt-8">
                <DeatilsCard data={workDetails} />
            </div>
        </section>
    )
}

export default Work