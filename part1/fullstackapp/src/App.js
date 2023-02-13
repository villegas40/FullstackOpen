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

const Content = (props) => {
  console.log('Enter component: Content')
  return(
    <>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  console.log('Enters component: Totals')
  console.log(props)
  return(
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts =[ 
    {
      name: 'Fundamentals of React',
      exercises: 10 
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]

  return(
    <div>
      <Header course = {course} />
      <Content parts={parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App;
