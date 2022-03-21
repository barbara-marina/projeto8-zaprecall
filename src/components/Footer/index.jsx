import { Container, Scoreboard } from "./style";

export default function Footer({scoreboard: [score]}) {
    return (
        <Container>
            {score.length}/8 CONCLUÍDOS
            <Scoreboard>
                {score.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
            </Scoreboard>
        </Container>        
    );
}