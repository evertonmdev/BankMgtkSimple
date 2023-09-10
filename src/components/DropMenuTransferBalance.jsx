import { Menu } from "@headlessui/react"
import { SendHorizonal } from "lucide-react"
import { useState, useContext } from "react"

import { Context } from "../Context"
import { toast } from "react-toastify"

export const DropMenuTransferBalance = () => {
    const [valor, setValor] = useState('');
    const [numerDaConta, setNumeroDaConta] = useState('');

    const { TratarValorToBRL, removeValueToBalance } = useContext(Context)

    const removeBalance = async () => {
        const valorTransferir = valor.replace(/[^0-9]/g, '');
        await removeValueToBalance(valorTransferir).then(r => toast.success(r)).catch(e => toast.error(e))
    }

    const changeValue = event => {
        let valor = event.target.value
        setValor(TratarValorToBRL(valor, true))
    }


    const changeNumAcc = event => {
        let acc = parseInt(event.target.value)
        if (isNaN(acc) || acc == '') {
            toast.info("Por favor digite apenas números", {
                autoClose: 800,
            })

            return setNumeroDaConta("")
        }

        setNumeroDaConta(acc)
    }



    return (
        <Menu as={"div"} className={"relative inline-block "}>

            <Menu.Button className={"bg-action p-4 rounded-full opacity-80 hover:opacity-90"}>
                <SendHorizonal color="white" />
            </Menu.Button>

            <Menu.Items className={"absolute bg-black/5  backdrop-blur-md rounded-lg shadow-2xl mt-3 z-10"}>
                <div className="flex flex-col px-5 items-center divide-y-2 gap-2 divide-zinc-400">
                    <h3 className="text-lg font-bold py-2">Transferir Saldo</h3>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col py-2">
                            <div className="w-[50vw] px-4 py-2 relative max-w-[300px]">
                                <h2 className="text-md font-bold ml-2">Digite o numero da conta:</h2>
                                <input value={numerDaConta} type="number" onChange={changeNumAcc} className="bg-transparent outline-none border-none px-2 py-1" placeholder="Número" />
                            </div>
                            <div className="w-[50vw] px-4 py-2 relative max-w-[300px]">
                                <h2 className="text-md font-bold ml-2">Digite o valor:</h2>
                                <input value={valor} onChange={changeValue} className="bg-transparent outline-none border-none px-2 py-1 " placeholder="Valor" />
                            </div>
                        </div>
                        <div className="px-2">
                            <button onClick={removeBalance} className="z-10 flex justify-center items-center p-4 bg-action w-fit h-fit rounded-full">
                                <SendHorizonal color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            </Menu.Items>
        </Menu>
    )
}