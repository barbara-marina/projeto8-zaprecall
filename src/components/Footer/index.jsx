import Status from "../Status/index";
import { Container, Scoreboard, Button } from "./style";

export default function Footer({deck,scoreboard: [score], startGame}) {
    return (
        <Container>
            {(score.length === deck.length)
            && (!(score.some((icon) => icon==="close-circle")) 
            ? <Status title="🥳  PARABÉNS!" text="Você não esqueceu de nenhum flashcard!"/> 
            : <Status title="😥  PUTZ!" text="Ainda faltaram alguns... Mas não desanime!"/>)}

            {score.length}/{deck.length} CONCLUÍDOS

            <Scoreboard>
                {score.map((icon, index) => <ion-icon key={index} name={icon}></ion-icon>)}
            </Scoreboard>
            
            {(score.length === deck.length)
            && <Button onClick={startGame}>REINICIAR RECALL</Button>}
        </Container>        
    );
}