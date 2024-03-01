import { useState } from "react";


const Title = ({text}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Display = ({text, counter}) => {
  return (
    <>
      <span>{text + " " + counter}</span>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGoodClick(){
    setGood(good + 1)
  }

  function handleNeutralClick(){
    setNeutral(neutral + 1)
  }

  function handleBadClick(){
    setBad(bad + 1)
  }

  return (
    <>
      <Title text="give feedback"/>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <Title text="statistics" />
      <div>
        <Display text="good" counter={good} />
      </div>
      <div>
        <Display text="neutral" counter={neutral} />
      </div>
      <div>
        <Display text="bad" counter={bad} />
      </div>
    </>
  );
}

export default App;
