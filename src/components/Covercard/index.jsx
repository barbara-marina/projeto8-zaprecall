import React from "react";
import { Container, Title } from "./style";

export default function Covercard({setState, index, icon}) {
    return (
        <Container>
            <Title className={icon}>Pergunta {index}</Title>
            {icon==="play-outline" && <ion-icon name={icon} onClick={() => setState("question")}></ion-icon>}
            {icon!=="play-outline" && <ion-icon name={icon} ></ion-icon>}
        </Container>
    );
}