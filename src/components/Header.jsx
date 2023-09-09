
import { Context } from "../Context"
import { useContext } from "react"

import { BiArrowBack } from "react-icons/bi"
import { ButtonsLoginRegister } from "./ButtonsLoginRegister"
import { BurguerMenu } from "./BurguerMenu"

export const Header = () => {
    const {
        TelaDeLogin,
        TelaResister,
        ResetStats
     } = useContext(Context)

    const Logado = localStorage.getItem("Logado") === "true" ? true : false

    return (
        <header className="flex  justify-center lg:justify-between items-center h-fit fixed w-full left-0 top-0 px-10 py-[1rem] z-10 backdrop-blur-sm">
            <h2 onClick={ResetStats} className="logo cursor-pointer" >MGTK BANK</h2>
        
            { TelaDeLogin || TelaResister ? <BiArrowBack onClick={ResetStats} className="block md:hidden absolute left-8 top-8 cursor-pointer" size={30} />
            : Logado ? <BurguerMenu /> : <ButtonsLoginRegister />
            }
        </header>
    )
}