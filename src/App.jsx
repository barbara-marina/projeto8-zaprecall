import { useState } from "react";
import Home from "./components/Home/index";
import Game from "./components/Game/index";

export default function App() {
    const [startGame, setStartGame] = useState(false);

    return (
        <>
            {!startGame && <Home  startGame={() => setStartGame(!startGame)} />}
            {startGame && <Game startGame={() => setStartGame(!startGame)} />}
        </>
    );
}