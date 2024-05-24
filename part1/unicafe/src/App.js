import { useState } from "react";


const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td style={{ textAlign: "left", verticalAlign: "middle" }}>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive} />
    </>
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
      <Title text="give feedback" />
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <Title text="statistics" />
      {countAll() === 0 ? <span>No feedback given</span> :
        <div>
          <table>
            <tbody>
              <Statistics good={good} neutral={neutral} bad={bad} all={countAll()} average={calculateAverage()} positive={calculatePositive()} />
            </tbody>
          </table>
        </div>
      }
    </>
  );
}

export default App;
