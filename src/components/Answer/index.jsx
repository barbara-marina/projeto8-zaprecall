import { Container, Text, Footer, Button} from "./style";

export default function Answer({setState, answer}) {
    
    function concludeCard() {
        setState("covercard");
    }

    return (
        <Container>
            <Text>{answer}</Text>
            <Footer>
            <Button color={"#FF3030"} onClick={concludeCard}>Não lembrei</Button>
            <Button color={"#FF922E"} onClick={concludeCard}>Quase não lembrei</Button>
            <Button color={"#2FBE34"} onClick={concludeCard}>Zap!</Button>
            </Footer>
        </Container>
    );
}