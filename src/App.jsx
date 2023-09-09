import Background from "./components/Background";

import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Advantages } from "./components/Advantages";
import { Ending } from "./components/Ending";
import { LoginScreen } from "./pages/Login";

import { Context } from "./Context";
import { useContext } from "react";
import { RegisterScreen } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const { TelaDeLogin, TelaResister, setTelaDeLogin } = useContext(Context)
  const Logado = localStorage.getItem("Logado") === "true" ? true : false
 

  return (
    <>
    <Background />
    <Header />

    <main className="min-h-screen w-full relative flex flex-col gap-10 px-10 mt-[5rem]">
        {
          TelaDeLogin ? <LoginScreen />
          : TelaResister ? <RegisterScreen /> 
          : Logado ? <Dashboard />
          : <LayoutTelaInicial/>
        }
    </main>
    </>
  )
}


function LayoutTelaInicial() {
  return (
        <>
            <Intro />
            <Advantages />
            <Ending />
        </>
  )
}

export default App
