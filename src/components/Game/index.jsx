import React from "react";
import { Container } from "./style.jsx";
import Logo from "../Logo/index.jsx";
import Deck from "../Deck/index.jsx";
import Footer from "../Footer/index.jsx";

const deck = [{question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
              {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
              {question:"Componentes devem iniciar com __", answer:"letra maiúscula"},
              {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
              {question:"O ReactDOM nos ajuda __ ", answer:" interagindo com a DOM para colocar componentes React na mesma página"},
              {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
              {question:"Usamos props para __ ", answer:"passar diferentes informações para componentes "},
              {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}];

export default function Game() {
    const scoreboard = React.useState([]);

    return (
        <Container>
            <Logo />
            <Deck deck={deck} scoreboard={scoreboard}/>
            <Footer key="footer" deck={deck} scoreboard={scoreboard}/>
        </Container>
    );
}