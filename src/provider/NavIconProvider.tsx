"use client"
import { useState } from "react"
import { NavIconContext } from "../contextAPI/index"
const NavIconProvider = ({ children }: { children: React.ReactNode }) => {
     const [active, setActive] = useState<string>("home")
    return (
        <NavIconContext.Provider value={{ active, setActive }}>{children}</NavIconContext.Provider>
    )
}

export default NavIconProvider