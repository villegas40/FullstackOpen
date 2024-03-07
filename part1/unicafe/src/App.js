import { useState } from "react";


const Title = ({text}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <span>{text + " " + value}</span>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({all, average, positive}) => {
  return (
    <div>
      <div>
        <span>all {all()}</span>
      </div>
      <div>
        <span>average {average()}</span>
      </div>
      <div>
        <span>positive {positive()}</span>
      </div>
    </div>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function countAll() {
    let all = good + neutral + bad
    return all
  }

  function calculateAverage() {
    let average = (good - bad) / (good + neutral + bad)
    average = isNaN(average) ? 0 : average
    return average
  }

  function calculatePositive() {
    let positive = (good * 100) / (good + neutral + bad)
    positive = isNaN(positive) ? 0 : positive
    return positive + " %"
  }

  function handleGoodClick() {
    setGood(good + 1)
  }

  function handleNeutralClick() {
    setNeutral(neutral + 1)
  }

  function handleBadClick() {
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
      { countAll() === 0 ? <span>No feedback given</span>: 
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <Statistics all={countAll} average={calculateAverage} positive={calculatePositive}/>
        </div>
      }
    </>
  );
}

export default App;
