import { Container, Text, Image } from "./style";

export default function Question({setState, question}) {
    return (
        <Container>
            <Text>{question}</Text>
            <Image onClick={() => setState("answer")}/>
        </Container>
    );
}