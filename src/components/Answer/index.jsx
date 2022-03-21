import { Container, Text, Footer, Button } from "./style";

export default function Answer({setState, answer, setIcon, scoreboard: [score, setScore]}) {
    function concludeCard(icon){
        setIcon(icon);
        setScore([...score, icon]);
        setState("covercard");
    }

    function restart(){
        setIcon("play-outline")
        setState([]);
        setState("covercard");
    }

    return (
        <>
            <Container>
                <Text>{answer}</Text>
                <Footer>
                    <Button color={"#FF3030"} onClick={() => concludeCard("close-circle")}>Não lembrei</Button>
                    <Button color={"#FF922E"} onClick={() => concludeCard("help-circle")}>Quase não lembrei</Button>
                    <Button color={"#2FBE34"} onClick={() => concludeCard("checkmark-circle")}>Zap!</Button>
                </Footer>
            </Container>
            {score.lenght === 8 && restart()}
        </>
    );
}