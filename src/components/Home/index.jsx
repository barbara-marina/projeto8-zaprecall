import { Container, StartButton, LogoImage, LogoText } from "./style";

export default function Home({state}) {
    return (
        <Container>
            <LogoImage/>
            <LogoText>ZapRecall</LogoText>
            <StartButton onClick={state}>Iniciar Recall!</StartButton>
        </Container>
    );
}