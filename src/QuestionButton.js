import React, { useState } from "react";

function QuestionButton(props) {

    const [info, setInfo] = useState("block");

    let points = "";
    if (props.id < 10)
        points = 100;
    else if (props.id >= 10 && props.id < 20)
        points = 200;
    else if (props.id >= 20 && props.id < 30)
        points = 300;
    else if (props.id >= 30 && props.id < 40)
        points = 400;
    else if (props.id >= 40 && props.id < 50)
        points = 600;

    const ClickHandler = () => {
        const pop_up = document.querySelector(".pop-up" + props.id);
        pop_up.style.display = "block";
        setInfo("none");
    }

    return (
        <div>
            <button className="questionbutton" key={props.id} onClick={ClickHandler} style= {{display: `${info}`}}><h1>{points}</h1></button>
        </div>
    )

}

export default QuestionButton;