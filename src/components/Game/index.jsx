import React from "react";
import { Container } from "./style.jsx";
import Logo from "../Logo/index.jsx";
import Deck from "../Deck/index.jsx";
import Footer from "../Footer/index.jsx";

export default function Game() {
    const scoreboard = React.useState([]);

    return (
        <Container>
            <Logo />
            <Deck scoreboard={scoreboard}/>
            <Footer key="footer" scoreboard={scoreboard}/>
        </Container>
    );
}