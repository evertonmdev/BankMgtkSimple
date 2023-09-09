import { useContext, useState } from 'react'
import { BiUser, BiAt, BiLock } from 'react-icons/bi'
import { tw } from '../utils/index.js'

import { Context } from '../Context.jsx'
import { toast } from 'react-toastify'

export const RegisterScreen = () => {
    const { setTelaDeLogin, ResetStats } = useContext(Context)

    const [NameFocus, setNameFocus] = useState(false)
    const [EmailFocus, setEmailFocus] = useState(false)
    const [PasswordFocus, setPasswordFocus] = useState(false)

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const clickNameHandle = () => setNameFocus(!NameFocus)
    const clickEmailHandle = () => setEmailFocus(!EmailFocus)
    const clickPasswordHandle = () => setPasswordFocus(!PasswordFocus)

    const createRegister = event => {
        event.preventDefault()
        // Só lembrando que esse projeto não é focado em segurança da informação, por isso o sistema de autenticação está básico.

        if(Email.trim() == "" || Password.trim() == "" || Name.trim == "" ) return toast.error("Por favor preencha todos os campos")

        localStorage.setItem("email", Email.trim())
        localStorage.setItem("password", Password.trim())
        localStorage.setItem("name", Name.trim())

        localStorage.setItem("saldo", "32200")
        localStorage.setItem("extrato", JSON.stringify([{
            balanceAct: "32200",
            balanceAnt: "2200",
            action: 1,
            qtd: 30000,
        }, {
            balanceAct: "2200",
            balanceAnt: "1000",
            action: 1,
            qtd: 1200,
        },  {
            balanceAct: "1000",
            balanceAnt: "200",
            action: 1,
            qtd: 800,
        }, {
            balanceAct: "200",
            balanceAnt: "0",
            action: 1,
            qtd: 200,
        }]))

        ResetStats()
        setTelaDeLogin(true)
    }


    const RedirectToLogin = () => {
        ResetStats()
        setTelaDeLogin(true)
    }



    return (
        <section className="flex justify-center items-center">
            <div className="px-10 py-20 backdrop-blur-md rounded-lg flex flex-col gap-10 relative">
                <h3 className="text-primary text-lg font-bold text-center">Register</h3>
                <form action="" className="flex flex-col gap-8">
                    <div className="flex gap-3 items-center justify-center">
                        <BiUser />
                        <div className='relative'>
                            <label htmlFor="email" className={tw("absolute left-0 pointer-events-none", NameFocus  || Name.length ?  "-top-5" : "")}>Nome</label>
                            <input minLength="1" onChange={event => setName(event.target.value)} onBlur={clickNameHandle} onFocus={clickNameHandle} className="bg-transparent outline-none w-full text-action" name="email" />
                        </div>
                   </div> 
                   <div className="flex gap-3 items-center justify-center">
                        <BiAt />
                        <div className='relative'>
                            <label htmlFor="email" className={tw("absolute left-0 pointer-events-none", EmailFocus  || Email.length ?  "-top-5" : "")}>Email</label>
                            <input minLength="1" type='email' onChange={event => setEmail(event.target.value)} onBlur={clickEmailHandle} onFocus={clickEmailHandle} className="bg-transparent outline-none w-full text-action" name="email" />
                        </div>
                   </div> 
                   <div className="flex gap-3 items-center justify-center">
                        <BiLock />
                        <div className='relative'>
                            <label htmlFor="password" className={tw("absolute left-0 pointer-events-none", PasswordFocus || Password.length ?  "-top-5" : "")}>Password</label>
                            <input type="password" onChange={event => setPassword(event.target.value)} onBlur={clickPasswordHandle} onFocus={clickPasswordHandle} className="bg-transparent outline-none w-full" name="password" />
                        </div>
                   </div>

                   <button onClick={createRegister} className="bg-action px-5 py-2 rounded-md text-secondary">Submit</button>
                </form>

                <button onClick={RedirectToLogin} className="bg-black/80 px-5 py-1 rounded-md text-secondary absolute bottom-10 right-10">Login</button>
            </div>

        </section>
    )
}