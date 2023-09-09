import Lottie from 'lottie-react';
import lottieMoneySaving from '../animations/lottieMoneySaving.json'

export const Intro = () => {
    return (
    <section className="FullScreen FlexCenter backdrop-blur-md">
        <div className="RowContainer">
          <Lottie className="lottieAnimationOne" animationData={lottieMoneySaving} />
          <div className="cardTitleParagraph">
            <h3>Confiança e Segurança em Primeiro Lugar</h3>
            <p>Em um mundo onde a segurança financeira é essencial, você merece um parceiro em quem pode confiar. Somos mais do que um banco digital; somos o guardião do seu patrimônio. Com a nossa equipe dedicada e tecnologia avançada, estamos aqui para proteger e fazer crescer seu dinheiro.</p>
          </div>
        </div>
    </section>
    )
}
