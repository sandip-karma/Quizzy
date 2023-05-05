import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
export default function Main() {

    const inputRef = useRef(null)
  return (
    <div className="container">
      <div className="title text-light">Quizzy - A Quiz Application</div>
        <ol>
          <li>You will be asked some questions one after another.</li>
          <li>1 point is awarded for the correct answer.</li>
          <li>
            Each question has four options. You can only choose one option.
          </li>
          <li>You can review and change answer before the quiz finish.</li>
          <li>The result will be declared at the end of the Quiz.</li>
        </ol>
      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder="Username"/>
      </form>

      <div className="start">
      <Link className='btn' to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  );
}
