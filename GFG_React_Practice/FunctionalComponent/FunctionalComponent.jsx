import react from 'react'

//This is called as functional component which will always start from Capital letters .
//A functional component is component which return some markups i.e. html attributes
// const Welcome=(props)=>{
//     console.log(props)
//   return <div style={{backgroundColor:"red",border:'2px solid black'}}>
//     {props.children}
//     <p style={{backgroundColor:"yellow"}}>{props.name}</p>
//     </div>

// }

//DESTRUCTURING DIRECTLY FOR CLEAN CODE 
const Welcome=({name,children})=>{
    console.log(children)
  return <div style={{backgroundColor:"red",border:'2px solid black'}}>
    {children}
    <p style={{backgroundColor:"yellow"}}>{name}</p>
    </div>

}

const FunctionalComponent=()=>{
  return (
    <Welcome name="ss">
      <h1>Hellow Welcome to practice jsx</h1>
      <p>This is children will be passed to welcome component</p>
    </Welcome>
  )
}
export default FunctionalComponent;