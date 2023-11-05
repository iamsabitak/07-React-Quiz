import React from "react";
import Header from "./Header";
import Main from "./Main";
function App() {
  return (
    <div className="app">
      <h1>
        <Header />
      </h1>
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
