import Title from "@/components/Title"
import Blog from "./Blog"
import Education from "./Education"
import Skills from "./Skills"
import Work from "./Work"

const About = () => {
    return (
        <section className="mt-25" id="about">
            <Title text="Resume" />
            <Education />
            <Work />
            <Skills />
            <Blog />
        </section>
    )
}

export default About