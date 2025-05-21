import Input from "@/components/Input"
import TextArea from "@/components/Textarea"
import Title from "@/components/Title"

const Contact = () => {
    return (
        <section className="mt-25" id="contact">
            <Title text="Contact" />
            <form className="mt-10 flex flex-col gap-5.5">
                <div className="flex gap-5.5 ">
                    <Input id="firstName" label="First name" type="text" />
                    <Input id="lastName" label="Last name" type="text" />
                </div>
                <div className="flex gap-5.5 ">
                    <Input id="email" label="Email" type="email" />
                    <Input id="phone" label="Phone" type="tel" />
                </div>
                <TextArea id="message" label="Message" />
                <button className=" w-[742px] gradient-bg px-6 py-3.5 rounded-md mt-10 cursor-pointer">Send message</button>
            </form>
        </section>
    )
}

export default Contact