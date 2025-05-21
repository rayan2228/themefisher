import Title from "@/components/Title"
import Education from "./Education"
import Skills from "./Skills"
import Work from "./Work"

const About = () => {
    return (
        <section className="mt-10 lg:mt-25 px-5 lg:px-0" id="about">
            <Title text="Resume" />
            <Education />
            <Work />
            <Skills />
        </section>
    )
}

export default About