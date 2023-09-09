import Lottie from 'lottie-react';
import lottieCadeado from '../animations/cadeado.json'

export const Advantages = () => {
    return (
        <section className="FullScreen FlexCenter backdrop-blur-md">
        <div className="RowContainer">
          <div className="cardTitleParagraph">
            <h3>Por que escolher nosso banco digital?</h3>
            <ul>
              <li>
                <span>Proteção Incansável:</span> Utilizamos as mais recentes tecnologias de segurança para garantir que seu dinheiro esteja sempre seguro.
              </li>
              <li>
                <span>Acesso Conveniente:</span> Gerencie suas finanças de forma simples e conveniente, a qualquer hora, em qualquer lugar.
              </li>
              <li>
                <span>Transparência Total:</span> Sem taxas escondidas. Nossa transparência significa que você sempre sabe para onde seu dinheiro está indo.</li>
              <li>
                <span>Atendimento Personalizado:</span> Nossa equipe de suporte está à disposição para ajudar com todas as suas necessidades financeiras.</li>
            </ul>
          </div>
          <Lottie className="lottieAnimationOne" animationData={lottieCadeado} />
        </div>
      </section>
    )
}