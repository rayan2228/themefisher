
const Title = ({ text, className }: { text: string, className?: string }) => {
    return (
        <h1 className={`font-bold text-5xl capitalize ${className}`}>{text}</h1>
    )
}

export default Title