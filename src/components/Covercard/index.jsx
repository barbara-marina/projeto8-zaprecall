import { Container, Title } from "./style";

export default function Covercard({setState, index}) {
    return (
        <Container>
            <Title>Pergunta {index}</Title>
            <ion-icon name="play-outline" onClick={() => setState("question")}></ion-icon>
        </Container>
    );
}