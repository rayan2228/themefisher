

const Title = ({ text, className, hasRenderedH1 = false }: { text: string; className?: string, hasRenderedH1?: boolean }) => {
    const Tag = hasRenderedH1 ? "h1" : "h2"
    if (!hasRenderedH1) hasRenderedH1 = true

    return (
        <Tag className={`font-bold text-5xl capitalize ${className}`}>
            {text}
        </Tag>
    )
}

export default Title
