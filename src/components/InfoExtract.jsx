import { useContext } from "react"
import { Context } from "../Context"

export const InfoExtract = () => {
    const ExtractHistory =  JSON.parse(localStorage.getItem("extrato")) ?  JSON.parse(localStorage.getItem("extrato")) : []

    return (
        <section className="shadow-lg rounded-xl p-5 w-full flex gap-2 flex-col">
            <h3 className="text-xl opacity-60 text-primamry font-light">EXTRATO</h3>
            <div className="overflow-x-auto flex gap-5">
                {
                    ExtractHistory.map((el, index) => (
                        <ExtractModel key={`${index}`} action={el.action} qtd={el.qtd} previus={el.balanceAnt} actual={el.balanceAct} />
                    ))
                }
            </div>
        </section>
    )
}


function ExtractModel({ actual, previus, action, qtd }) {
    const { TratarValorToBRL } = useContext(Context);

    const CardStyle = "flex-col divide-y-2 divide-zinc-300  flex gap-4 min-w-[70%] h-fit py-10 px-2 shadow-xl items-center border border-black/30 rounded-xl"

    return (
        <>
            {
                action == 1
                    ?
                    <div className={CardStyle} >
                        <h3 className="text-green-500">+{TratarValorToBRL(qtd)}</h3>
                        <span className="py-2">Saldo anterior: {TratarValorToBRL(previus)}</span>
                        <span className="py-2">Novo Saldo: {TratarValorToBRL(actual)}</span>
                    </div>
                    :
                    <div className={CardStyle} >
                        <h3 className="text-red-500">-{TratarValorToBRL(qtd)}</h3>
                        <span className="py-2">Saldo anterior: {TratarValorToBRL(previus)}</span>
                        <span className="py-2">Novo Saldo: {TratarValorToBRL(actual)}</span>
                    </div>
            }
        </>
    )
}