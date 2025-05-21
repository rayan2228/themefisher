import Image, { StaticImageData } from 'next/image';

const BlogCard = ({
    data,
}: {
    data: {
        id: number;
        image: StaticImageData;
        category: string;
        date: string;
        title: string;
        description: string;
        author: string;
        long?: boolean;
    }[];
}) => {
    return (
        <div className="columns-2 gap-6 mt-10 space-y-6 w-[742px]">
            {data.map(({ id, image, category, date, title, description, author, long }) => (
                <div key={id} className="break-inside-avoid  rounded-lg shadow-md bg-black min-w-[360px]">
                    <Image
                        src={image}
                        alt={title}
                        className={`w-full object-cover ${long ? 'h-[320px]' : 'h-[228px]'}`}
                    />
                    <div className="p-6">
                        <span className="text-xs text-text-three">
                            {category} | {date}
                        </span>
                        <h3 className="font-bold text-lg mt-4 mb-2.5">{title}</h3>
                        <p className="text-sm text-text-four mb-6">{description}</p>
                        <span className="text-sm relative pl-5.5 after:content-[''] after:w-4 after:h-[1px] after:gradient-bg after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-6 before:content-[''] before:w-4 before:h-[1px] before:gradient-bg before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0">
                            Posted By {author}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCard;
