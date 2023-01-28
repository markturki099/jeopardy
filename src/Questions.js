import "./App.css"
import questions from "./Questions.json"

function Questions (props) {

    let name = ("pop-up" + props.id);

    const ClickHandler = () => {
        const pop_up = document.querySelector(".pop-up" + props.id);
        pop_up.style.display = "none";
    }

    return(
        <div className={name}>
            <div className="questions">
                <h1>{questions[props.id].title}</h1> 
                <h1>{questions[props.id].text}</h1>     
            </div>
            <button className="next" onClick={ClickHandler}>Next</button>
        </div>
    )
}  

export default Questions;