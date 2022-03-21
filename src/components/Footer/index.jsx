import { Container } from "./style";

export default function Footer({done, total}) {
    return (
        <Container>
            {done}/{total} CONCLUÍDOS
        </Container>        
    );
}