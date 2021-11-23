import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  let [number, setNumber] = useState(1);
  let [answer, setAnswer] = useState(1);
  let [guess, setGuess] = useState("");

  useEffect(()=>{
      if (number % 3 === 0 && number % 5 === 0) {
        setAnswer("FizzBuzz")
      } else if (number % 3 === 0) {
        setAnswer("Fizz")
      } else if (number % 5 === 0) {
        setAnswer("Buzz")
      } else {
        setAnswer(number);
  }}, [number])


  const handleInc = () => {
    setNumber(number + 1);
  };

  const handleGuess = (event) => {
        setGuess(event.target.value);
  };

  const handleGuessSubmission = (event) => {
    event.preventDefault();
    const handleGuess = guess.trim();
    if (!handleGuess){
      return
    }

    setGuess("");
  }


  return (
    <>
      <button value={number} onClick={handleInc}>+</button>
      <h2>Current Number: {number}</h2>
      <h2>Result: {answer}</h2>
      <form onSubmit={handleGuessSubmission}>
        <input
        type="text"
        placeholder="Guess"
        value={guess}
        onChange={handleGuess} />
        <input type="submit">Make Guess</input>
      </form>
    </>
  );
}

export default App;
