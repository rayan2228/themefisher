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
        <div className="fixed z-30 top-84 lg:top-35 lg:right-8 flex-col justify-center items-center
          gap-11 flex bg-bg-two p-4 lg:bg-transparent lg:p-0 right-0 rounded-s-3xl">
            <h6 className="text-sm text-text-two hidden lg:block" style={{
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