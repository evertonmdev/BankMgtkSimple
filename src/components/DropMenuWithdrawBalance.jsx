import { Menu } from "@headlessui/react"
import { ArrowDown } from "lucide-react"
import { useState, useContext } from "react"

import { Context } from "../Context"
import { toast } from "react-toastify"

export const DropMenuWithdrawBalance = () => {
    const [valor, setValor] = useState('');
    const { TratarValorToBRL, removeValueToBalance } = useContext(Context)

    const removeBalance = async () => {
        const valorTransferir = valor.replace(/[^0-9]/g, '');
        await removeValueToBalance(valorTransferir).then(r => { toast.success(r) }).catch(e => toast.error(e))
    }

    const changeValue = event => {
        let valor = event.target.value
        setValor(TratarValorToBRL(valor, true))
    }


    return (
        <Menu as={"div"} className={"relative inline-block "}>

            <Menu.Button className={"bg-action p-4 rounded-full opacity-80 hover:opacity-90"}>
                <ArrowDown color="white" />
            </Menu.Button>

            <Menu.Items className={"absolute bg-black/5  backdrop-blur-md rounded-lg shadow-2xl mt-3 z-10"}>
                <div className="flex flex-col px-5 items-center divide-y-2 gap-2 divide-zinc-400">
                    <h3 className="text-lg font-bold py-2">Retirar Saldo</h3> 
                    <div className="flex py-2">
                        <div className="w-[50vw] px-4 py-2 relative max-w-[300px]">
                            <h2 className="text-md font-bold ml-2">Digite o valor:</h2>
                            <input value={valor} onChange={changeValue} className="bg-transparent outline-none border-none px-2 py-1 " placeholder="Valor" />
                        </div>
                        <div className="px-2">
                            <button onClick={removeBalance} className="z-10 flex justify-center items-center p-4 bg-action w-fit h-fit rounded-full">
                                <ArrowDown color="white" />
                            </button>
                        </div>
                    </div>
                </div>
            </Menu.Items>
        </Menu>
    )
}