import { useContext } from "react";
import { Menu } from "@headlessui/react";
import { LogOut, User, Users2, Wallet } from 'lucide-react';

import { Context } from "../Context";

export const BurguerMenu = () => {
    const { LogoutF } = useContext(Context);

    const StyleInnactive = `bg-transparent px-5 py-2 flex gap-3 items-center justify-center group`

    const LinkActiveStyle = active => active ? `bg-action text-white px-5 py-2 flex gap-3 items-center justify-center ` : StyleInnactive
    const LogoutActiveStyle = active => active ? `bg-red-500 text-white px-5 py-2 flex gap-3 items-center justify-center` : StyleInnactive

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
                <User size={30} />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-left divide-y divide-gray-800 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className='p-1 flex flex-col gap-2'>
                    <Menu.Item>
                        {({ active }) => (
                            <button className={LinkActiveStyle(active)}>
                                <Wallet color={active ? "white" : "black"} />
                                Carteira 
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button className={LinkActiveStyle(active)}>
                                <Users2 color={active ? "white" : "black"} />
                                Amigos
                            </button>
                        )}
                    </Menu.Item>
                </div>

                <div className='mt-2 flex flex-col'>
                    <Menu.Item >
                        {({ active }) => (
                            <button className={LogoutActiveStyle(active)} onClick={LogoutF}>
                                <LogOut color={active ? "white" : "black"} />
                                Sair
                            </button>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    )
}
