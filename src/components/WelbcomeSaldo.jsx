import { useContext, useEffect, useState } from "react";
import { ArrowBigRight } from "lucide-react"
import { DropMenuAddBalance } from "./DropMenuAddBalance";

import { Context } from "../Context";
import {  DropMenuTransferBalance } from "./DropMenuTransferBalance";
import { DropMenuWithdrawBalance } from "./DropMenuWithdrawBalance";

export const WelbcomeSaldo = () => {
    const { TratarValorToBRL, saldo } = useContext(Context)
    const nome = localStorage.getItem("name").trim().split(" ")[0]

    return (
        <>
            <section className="shadow-lg rounded-xl p-5 min-w-[70%] flex-1 flex gap-3 flex-col divide-y-2 divide-zinc-300">
                <div>
                    <h3 className="text-xl text-primary/60 font-light">Olá {nome} é um prazer ter você por aqui!<span className="text-action/100 font-bold"></span></h3>
                    <h2 className="text-lg font-extralight text-primary/50">Saldo disponivel: <span className="font-mono font-semibold text-action">{TratarValorToBRL(saldo)}</span></h2>
                </div>
                <div className="flex gap-4 py-4">
                    <DropMenuAddBalance />
                    <DropMenuTransferBalance />
                    <DropMenuWithdrawBalance />
                </div>
            </section>
        </>
    )
}