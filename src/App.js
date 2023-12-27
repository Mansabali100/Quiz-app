import React,{useState} from 'react'
import Questionlist from './Component/Questionlist'
import {v4 as uuidv4} from "uuid"

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [Clicked,setCliked]=useState(false);
  const [Shoescore,setShowscore] = useState(false)

  const handleCorrectAnswer = (iscorrect)=>{
    if(iscorrect){
      setScore(score+1);
    }
    setCliked(true)
  }
  const handleNextQuestion = () =>{
    setCliked(false)
    if(currentQuestion < Questionlist.length - 1){
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowscore(true)
    }

  }
  return (
    <div className="app-wrapper">
      {Shoescore ? (
        <div>
          <div className='completed'>Completed!</div>
          <br/>
          <div className='score-section'>
            Your Score : {score}/{Questionlist.length}
          </div>
        </div>
      ):(
      <div>
        <div className="question-section-wrapper">
          <div className="question-count">
            Question {currentQuestion + 1} of {Questionlist.length}
          </div>
          <div className="question">{Questionlist[currentQuestion].question}</div>
        </div>
        <div className="answer-section-wrapper">
        {Questionlist[currentQuestion].answerlist.map((answerOption) => (
  <li className="answer-list" key={uuidv4()}>
    <button
      disabled={Clicked}
      className={`answer-button ${Clicked && answerOption.iscorrect ? "correct" : ""}`}
      onClick={() => handleCorrectAnswer(answerOption.iscorrect)}
    >
      {answerOption.answer}
    </button>
  </li>
))}
        </div>
      
      <div>
            <button disabled={!Clicked} className='next-button' onClick={handleNextQuestion}>
              Next
            </button>
      </div>
      </div>
      )}
    </div>
  )
}
export default App