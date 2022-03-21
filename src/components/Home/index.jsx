import { Container, Button, Image, Text } from "./style";

export default function Home({startGame}) {
    return (
        <Container>
            <Image/>
            <Text>ZapRecall</Text>
            <Button onClick={startGame}>Iniciar Recall!</Button>
        </Container>
    );
}