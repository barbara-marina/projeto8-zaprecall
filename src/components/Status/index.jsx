import { Container, Title, Text} from "./style";

export default function Status({score}) {
    return (
        <Container>
            {score.every((icon) => icon==="checkmark-circle" || icon==="help-circle") ?
            <>
                <Title> 🥳 PARABÉNS!</Title>
                <Text>Você não esqueceu de nenhum flashcard!</Text>
            </> : 
            <>
                <Title> 😥 PUTZ!</Title>
                <Text>Ainda faltaram alguns... Mas não desanime!</Text>
            </>
            }
        </Container>        
    );
}