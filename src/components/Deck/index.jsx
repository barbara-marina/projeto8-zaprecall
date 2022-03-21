import Flashcard from "../Flashcard/index.jsx";
import { Container } from "./style.jsx";

export default function Deck({deck, scoreboard}) {
    deck.sort(() => Math.random() - 0.5);
    return (
        <Container>
            {deck.map((deck, index) => <Flashcard deck={deck} index={index+1} scoreboard={scoreboard} key={index+1}/>)}
        </Container>
    );
}