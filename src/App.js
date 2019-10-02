import React from "react";

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
