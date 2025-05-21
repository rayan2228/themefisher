

const Title = ({ text, className, hasRenderedH1 = false }: { text: string; className?: string, hasRenderedH1?: boolean }) => {
    const Tag = hasRenderedH1 ? "h1" : "h2"
    if (!hasRenderedH1) hasRenderedH1 = true

    return (
        <Tag className={`font-bold lg:text-5xl capitalize text-3xl md:text-4xl  ${className}`}>
            {text}
        </Tag>
    )
}

export default Title
