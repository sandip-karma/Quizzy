import React, { useRef } from "react";

export default function Main() {

    const inputRef = useRef(null)
  return (
    <div className="container">
      <h1 className="title text-light">Quizzy</h1>
      <h4>
        <ol>
          <li>You will be asked some questions one after another.</li>
          <li>1 point is awarded for the correct answer.</li>
          <li>
            Each question has four options. You can only choose one option.
          </li>
          <li>You can review and change answer before the quiz finish.</li>
          <li>The result will be declared at the end of the Quiz.</li>
        </ol>
      </h4>
      <form id="form">
        <input ref={inputRef} type="text" placeholder="Username"/>
      </form>
    </div>
  );
}
