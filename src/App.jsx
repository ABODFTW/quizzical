import React from "react";
import "./App.css";

function App() {
  React.useEffect(() => {
    const response = fetch("https://opentdb.com/api.php?amount=5&category=22");
    response
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
