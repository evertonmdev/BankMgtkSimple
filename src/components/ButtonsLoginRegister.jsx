import { useContext } from 'react';
import { motion } from 'framer-motion';

import { Context } from '../Context';
import { buttonHover } from "../animations/animations"


export const ButtonsLoginRegister = () => {
    const {
        setTelaDeLogin,
        setTelaRegister
    } = useContext(Context)

    return (
        <div>
            <ul className="flex flex-row gap-3 w-fit">
                <li>
                    <motion.a
                        onClick={() => setTelaDeLogin(true)}
                        variants={buttonHover}
                        initial="initial"
                        whileHover="final"
                        transition={{
                            duration: 0.24,
                        }}
                        className="ActionButton">
                        Login
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        onClick={() => setTelaRegister(true)}
                        variants={buttonHover}
                        initial="initial"
                        whileHover="final"
                        transition={{
                            duration: 0.24,
                        }}
                        className="ActionButton">
                        Cadastre-se
                    </motion.a>
                </li>
            </ul>
        </div>
    )
}