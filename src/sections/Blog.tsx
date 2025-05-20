import blog1Img from "@/app/assets/images/blog1.png"
import blog2Img from "@/app/assets/images/blog2.png"
import blog3Img from "@/app/assets/images/blog3.png"
import blog4Img from "@/app/assets/images/blog4.png"
import blog5Img from "@/app/assets/images/blog5.png"
import blog6Img from "@/app/assets/images/blog6.png"
import BlogCard from "@/components/BlogCard"
import Title from "@/components/Title"
const blogs = [
    {
        "id": 1,
        "image": blog1Img,
        "long": true,
        "category": "Photography",
        "date": "28 Apr 2022",
        "title": "The artist vocation is to send light into the human heart.",
        "description": "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
        "author": "Daryl Smith"
    },
    {
        "id": 2,
        "image": blog2Img,
        "category": "Adventure",
        "date": "28 Apr 2022",
        "title": "The mission of art is to represent nature not to imitate her.",
        "description": "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
        "author": "Daryl Smith"
    },
    {
        "id": 3,
        "image": blog3Img,
        "long": true,
        "category": "Graphic design",
        "date": "20 DEC 2021",
        "title": "There are countless versions of lorem ipsum, the most famous.",
        "description": "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
        "author": "Daryl Smith"
    },
    {
        "id": 4,
        "image": blog4Img,
        "category": "Travel",
        "date": "20 DEC 2021",
        "title": "The principles of true art is not to portray, but to evoke.",
        "description": "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
        "author": "Daryl Smith"
    },
    {
        "id": 5,
        "image": blog5Img,
        "long": true,
        "category": "Design",
        "date": "28 DEC 2021",
        "title": "UI Interactions of the week",
        "description": "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
        "author": "Daryl Smith"
    },
    {
        "id": 6,
        "image": blog6Img,
        "category": "Travel",
        "date": "20 DEC 2021",
        "title": "Party Jokes Startling But Unnecessary",
        "description": "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
        "author": "Daryl Smith"
    },
]

const Blog = () => {
    return (
        <section className="mt-25">
            <Title text="Blog" />
            <BlogCard data={blogs} />
        </section>
    )
}

export default Blog