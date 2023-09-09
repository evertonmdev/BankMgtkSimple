import { Menu } from "@headlessui/react"
import { Plus } from "lucide-react"
import { useState, useContext } from "react"

import { Context } from "../Context"

export const DropMenuAddBalance = () => {
    const [valor, setValor] = useState('');
    const { TratarValorToBRL, addValueToBalance } = useContext(Context)

    const addBalance = () => {
        const valorAdicionar = valor.replace(/[^0-9]/g, '');
        addValueToBalance(valorAdicionar)
    }

    const changeValue = event => {
        let valor = event.target.value
        setValor(TratarValorToBRL(valor, true))
    }

    return (
        <Menu as={"div"} className={"relative inline-block "}>

            <Menu.Button className={"bg-action p-4 rounded-full opacity-80 hover:opacity-90"}>
                <Plus color="white" />
            </Menu.Button>

            <Menu.Items className={"absolute bg-black/5  backdrop-blur-md rounded-lg shadow-2xl mt-3 z-10"}>
                <div className="flex px-5 items-center divide-x-2 divide-zinc-400">
                    <div className="w-[50vw] px-4 py-2 relative max-w-[300px]">
                        <h2 className="text-md font-bold ml-2">Digite o valor:</h2>
                        <input value={valor} onChange={changeValue} className="bg-transparent outline-none border-none px-2 py-1 " placeholder="Valor" />
                    </div>
                    <div className="px-2">
                        <button onClick={addBalance} className="z-10 flex justify-center items-center p-4 bg-action w-fit h-fit rounded-full">
                            <Plus color="white" />
                        </button>
                    </div>
                </div>
            </Menu.Items>
        </Menu>
    )
}