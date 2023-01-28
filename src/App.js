import QuestionButton from "./QuestionButton";
import Questions from "./Questions";
import _ from "lodash";
import "./App.css"


function App() {

  let theme = [
    "Astronomija",
    "D&D",
    "Šah",
    "Ples",
    "Video Igre",
    "Sci-Fi",
    "Disney",
    "WWII",
    "Indie Rock",
    "Special"
]
  let questions = [];
_.times(50, (i) => {
  questions.push(<QuestionButton id={i}/>);
  questions.push(<Questions id={i}/>);
});

  return (
    <div className="background">
      <div className="wrapper">
        {theme.map(x => <h2>{x}</h2>)}
      </div>
      <div className="wrapper">
        {questions}
      </div>
    </div>
  );
}

export default App;
