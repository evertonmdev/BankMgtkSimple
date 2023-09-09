import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Context = createContext();

const ContextProvider = ({children}) => {
    const extractHistora = JSON.parse(localStorage.getItem("extrato")) 

    const [saldo, setSaldo] = useState(localStorage.getItem("saldo"))
    const [extractHistory, setExtractHistory] = useState(extractHistora ? extractHistora : [])
    const [totalBusy, setTotalBusy] = useState(0);
    
    const [TelaDeLogin, setTelaDeLogin] = useState(0);
    const [TelaResister, setTelaRegister] = useState(0);

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const ResetStats = () => {
        setTelaDeLogin(false)
        setTelaRegister(false)
    }

    const LogoutF = async () => {
        const nome = localStorage.getItem("name")
        toast.success(`${nome}, foi um prazer ter você por aqui!`, {
            autoClose: 2700
        })
        await Sleep(3200)
        ResetStats()
        localStorage.setItem("Logado", false)
        window.location = "/BankMgtkSimple"
    }

    const totalBusyF = () => {
        const total = extractHistory.reduce((total, value) => {
            return total += parseInt(value.qtd)
        }, 0)

        setTotalBusy(total)
    }

    const addValueToBalance = valor => {
        if(valor > 0) {
            let newValue = parseInt(saldo) + parseInt(valor)
            localStorage.setItem("saldo", newValue)
            extractHistory.unshift({
                balanceAct: newValue, 
                balanceAnt: saldo, 
                action: 1, 
                qtd: parseInt(valor)
            })

            AtualizarInfos()
        } else {
            toast.error("Operação não autorizada")
        }
    }

     const removeValueToBalance = valor => {
        let balance = parseInt(saldo)
        if(parseInt(valor) > balance || valor.trim() == "") {
            toast.error("Operação não autorizada")
            return ""
        } else {
            let newValue = parseInt(saldo) - parseInt(valor)
            localStorage.setItem("saldo", newValue)
            toast.success("Operação realizada com sucesso!")
            extractHistory.unshift({
                balanceAct: newValue, 
                balanceAnt: saldo, 
                action: 0, 
                qtd: parseInt(valor)
            })

            return AtualizarInfos()
        }
    }

    const AtualizarInfos = () => {
        setSaldo(localStorage.getItem("saldo"))
    

        localStorage.setItem("extrato", JSON.stringify(extractHistory))
        setExtractHistory(JSON.parse(localStorage.getItem("extrato")))

        totalBusyF()
    }

    const TratarValorToBRL = (saldo, alert) => {
        // remove todos os caracteres não numéricos
        if(!saldo) return ""
        saldo = saldo.toString().replace(/[^0-9]/g, '');

        if(parseInt(saldo) < 10 && alert) {
            toast.error("Por favor escolha um valor acima de R$0,10")
            return "R$0,10"
        }
        // Adiciona a vírgula para os centavos
        if (saldo.length >= 3) {
            saldo = saldo.replace(/(\d{2})$/, ',$1');
        } else {
            saldo = `0,${saldo}`;
        }

        // Remove os zeros à esquerda
        saldo = saldo.replace(/^0+(?=\d)/, '');

        // Adiciona os pontos de milhar
        saldo = saldo.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        // Adiciona o "R$"
        saldo = `R$${saldo}`;


        if (saldo == "R$") {
            return setValor("R$0,00")
        }

        return saldo
    }

    const values = {
        TelaDeLogin,
        setTelaDeLogin,
        TelaResister,
        setTelaRegister,
        ResetStats,
        LogoutF,
        Sleep,
        saldo,
        TratarValorToBRL,
        addValueToBalance,
        removeValueToBalance,
        totalBusy
    }


    useEffect(() => {
        AtualizarInfos()
    }, [])

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export {
    Context, 
    ContextProvider
}