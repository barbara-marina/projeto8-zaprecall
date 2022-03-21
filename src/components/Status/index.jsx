import { Container, Title, Text} from "./style";

export default function Status({title, text}) {
    return (
        <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>     
    );
}