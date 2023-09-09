import tailwindConfig from "../../tailwind.config"
const temas = tailwindConfig.theme.extend

const buttonHover = {
    initial: {
        padding: "0.3rem 1rem",
        backgroundColor: "transparent",
        color: temas["colors"].action
    },
    final: {
        padding: "0.3rem 1.8rem",
        backgroundColor: temas["colors"].action,
        color: temas["backgroundColor"].primary
    }
}

export {
    buttonHover
}