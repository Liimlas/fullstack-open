const Header = ({name}) => {
    return (
      <h1>{name}</h1>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.name} {props.exercises}</p>
    )
  }
  const Content = ({parts}) => {
    
    return (
      <div>
        { parts.map (part => 
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.map(part => part.exercises).reduce((a, c) => a + c, 0)
    return (
      <p><b>Total number of exercises {total}</b></p>
    )
  }
  
  const Course = ({course}) => {
  
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

  export default Course;