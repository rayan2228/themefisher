const languages = [
    {
        name: "French",
        code: "Fr"
    },
    {
        name: "English",
        code: "En"
    }
]
const Copywrite = () => {
    return (
        <div className="fixed z-30 bottom-60 right-8 flex flex-col justify-center items-center
          gap-11">
            <h6 className="text-sm text-text-two" style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed"
            }}>© design by themefisher developed by gethugothemes</h6>
            <div className="flex flex-col gap-2">
                {
                    languages.map((item) => {
                        return (
                            <button key={item.name} className={`w-8 h-8 rounded-full flex items-center justify-center ${item.name === "English" ? "gradient-bg" : "bg-bg-three"}`}>
                                {item.code}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Copywrite