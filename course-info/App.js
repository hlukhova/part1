const Header = (props) => {
  return (
    <div>
      <p>
        Header course:{props.course}
      </p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>
      Content part:{props.part}, number of exercises:{props.number}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        Total number of exercises: {props.sum}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const number1 = 10
  const part2 = 'Using props to pass data'
  const number2 = 7
  const part3 = 'State of a component'
  const number3 = 14

  return (
    <div>
      
      <Header course={course}/>
      <Content part={part1} number={number1} />
      <Content part={part2} number={number2} />
      <Content part={part3} number={number3} />
      <Total sum={number1+number2+number3}/>
    </div>
  )
}

export default App
