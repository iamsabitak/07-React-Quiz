import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };

    default:
      throw new Error("Action Error");
  }
}

const initialState = {
  questions: [],
  //'loading','ready','error','active','finished'
  status: "loading",
  index: 0,
};
function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <h1>
        <Header />
      </h1>
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
