import { useState } from "react";
import Home from "./components/Home/index";
import Game from "./components/Game/index";

export default function App() {
    const [game, setGame] = useState(false);

    return (
        <>
            {!game && <Home  state={() => setGame(!game)} />}
            {game && <Game />}
        </>
    );
}