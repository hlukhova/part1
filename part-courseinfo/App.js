const Header = (props) => {
  return (
    <div>
      <p>
        Header course:{props.course}
      </p>
    </div>
  )
}

const Part = (props) => {

  return (
    <div> 
      <p>
       part:{props.part}, number of exercises:{props.number}
      </p>
    </div>
  )
}
const Content = () => {
  const part1 = 'Fundamentals of React'
  const number1 = 10
  const part2 = 'Using props to pass data'
  const number2 = 7
  const part3 = 'State of a component'
  const number3 = 14
  return (
    <div> 
      <p>
      Content 
      </p>
      <Part part={part1} number={number1} />
      <Part part={part2} number={number2} />
      <Part part={part3} number={number3} />
    
      <p>Total sum={number1+number2+number3}</p>
    </div>
  )
}



const App = () => {

  const course = 'Half Stack application development'
  
  return (
    <div>
      
      <Header course={course}/>
      <Content  />
      
    </div>
  )
}

export default App
