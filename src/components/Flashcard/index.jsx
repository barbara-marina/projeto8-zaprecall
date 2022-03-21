import React from "react";
import Covercard from "../Covercard/index";
import Question from "../Question/index";
import Answer from "../Answer/index";

export default function Flashcard({deck:{question, answer}, index}) {
    const [state, setState] = React.useState("covercard");

    return (
        <>
            {state==="covercard" && <Covercard  setState={setState} index={index} />}
            {state==="question" && <Question setState={setState} question={question} />}
            {state==="answer" && <Answer setState={setState} answer={answer} />}
        </>
    );
}