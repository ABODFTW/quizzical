import React from "react";

import QuizPage from "./components/QuizPage";
import LaunchPage from "./components/LaunchPage";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  const [isNewGame, setIsNewGame] = React.useState(true);

  function toggleLaunchPage() {
    setIsNewGame((prev) => !prev);
  }

  return (
    <div className="App">
      <motion.div animate={{ scale: 2 }} transition={{ duration: 1 }}>
        {isNewGame && <LaunchPage toggleLaunchPage={toggleLaunchPage} />}
      </motion.div>
      {!isNewGame && <QuizPage />}
    </div>
  );
}

export default App;
