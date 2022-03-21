import Status from "../Status/index";
import { Container, Scoreboard } from "./style";

export default function Footer({deck,scoreboard: [score]}) {
    return (
        <Container>
            {score.length === deck.length && <Status score={score}/>}
            {score.length}/{deck.length} CONCLUÍDOS
            <Scoreboard>
                {score.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
            </Scoreboard>
        </Container>        
    );
}