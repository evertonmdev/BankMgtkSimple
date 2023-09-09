import { useContext, useState } from 'react'
import { BiUser, BiLock } from 'react-icons/bi'
import { tw } from '../utils/index.js'

import { Context } from '../Context.jsx'
import { toast } from 'react-toastify'

export const LoginScreen = () => {
    const { setTelaRegister, ResetStats, Sleep } = useContext(Context)

    const [EmailFocus, setEmailFocus] = useState(false)
    const [PasswordFocus, setPasswordFocus] = useState(false)

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const clickEmailHandle = () => setEmailFocus(!EmailFocus)
    const clickPasswordHandle = () => setPasswordFocus(!PasswordFocus)

    const sendLogin = async event => {
        event.preventDefault()
        
        if(Email === localStorage.getItem('email') && Password === localStorage.getItem("password")) {
            localStorage.setItem("Logado", true)
            toast.success("Logado com sucesso", {
                autoClose: 600,
            })
            await Sleep(1500)
            window.location = "/"
        }

        else {
            toast.error("Email ou senha incorretos.", {
                autoClose: 1500,
            })
            localStorage.setItem("Logado", false)
        }
    }


    const RedirectToRegister = () => {
        ResetStats()
        setTelaRegister(true)
    }



    return (
        <section className="flex justify-center items-center">
            <div className="px-10 py-20 backdrop-blur-md rounded-lg flex flex-col gap-10 relative">
                <h3 className="text-primary text-lg font-bold text-center">Login</h3>
                <form action="" className="flex flex-col gap-8">
                   <div className="flex gap-3 items-center justify-center">
                        <BiUser />
                        <div className='relative'>
                            <label htmlFor="email" className={tw("absolute left-0 pointer-events-none", EmailFocus  || Email.length ?  "-top-5" : "")}>Email</label>
                            <input  onChange={event => setEmail(event.target.value)} onBlur={clickEmailHandle} onFocus={clickEmailHandle} className="bg-transparent outline-none w-full text-action" name="email" />
                        </div>
                   </div> 
                   <div className="flex gap-3 items-center justify-center">
                        <BiLock />
                        <div className='relative'>
                            <label htmlFor="password" className={tw("absolute left-0 pointer-events-none", PasswordFocus || Password.length ?  "-top-5" : "")}>Password</label>
                            <input type="password" onChange={event => setPassword(event.target.value)} onBlur={clickPasswordHandle} onFocus={clickPasswordHandle} className="bg-transparent outline-none w-full" name="password" />
                        </div>
                   </div>

                   <button onClick={sendLogin} className="bg-action px-5 py-2 rounded-md text-secondary">Submit</button>
                </form>

                <button onClick={RedirectToRegister} className="bg-black/80 px-5 py-1 rounded-md text-secondary absolute bottom-10 right-10">Register</button>
            </div>

        </section>
    )
}