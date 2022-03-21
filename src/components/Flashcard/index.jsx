import React from "react";
import Covercard from "../Covercard/index";
import Question from "../Question/index";
import Answer from "../Answer/index";

export default function Flashcard({deck:{question, answer}, index, scoreboard}) {
    const [state, setState] = React.useState("covercard");
    const [icon, setIcon] = React.useState("play-outline");

    return (
        <>
            {state==="covercard" && <Covercard  setState={setState} index={index} icon={icon} />}
            {state==="question" && <Question setState={setState} question={question} />}
            {state==="answer" && <Answer setState={setState} answer={answer} setIcon={setIcon} scoreboard={scoreboard}/>}
        </>
    );
}