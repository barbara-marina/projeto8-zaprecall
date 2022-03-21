import { Container } from "./style.jsx";
import Logo from "../Logo/index.jsx";
import Deck from "../Deck/index.jsx";
import Footer from "../Footer/index.jsx";

const scoreboard = {done: 0, total: 8};

export default function Game() {
    return (
        <Container>
            <Logo />
            <Deck />
            <Footer key="footer" {...scoreboard}/>
        </Container>
    );
}