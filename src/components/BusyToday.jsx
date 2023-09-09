import { useContext } from "react"
import { Context } from "../Context"

export const BusyToday = () => {
    const { totalBusy, TratarValorToBRL } = useContext(Context);
    return (
        <section className="shadow-lg rounded-xl p-5 w-fit flex gap-5 flex-col">
            <h3 className="text-xl opacity-60 text-primamr
            y font-light">Total Movimentado</h3>
            
            <h4 className="font-bold text-primary/70 text-lg">{TratarValorToBRL(totalBusy)}</h4>
        </section>
    )
}