const Header = (props) => {
  console.log('Enter component: Header ' + props.course)
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) =>{
  console.log('Enter component: Part')
  return(
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Conent = (props) => {
  console.log('Enter component: Content')
  return(
    <>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3}/>
    </>
  )
}

const Total = (props) => {
  console.log('Enters component: Totals')
  return(
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return(
    <div>
      <Header course = {course} />
      <Conent part1={part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3={part3} exercises3 = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

export default App;
