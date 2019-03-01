
// Import react and react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// function getButtonText(){
//   return 'Click on me'
// }

// create react component
const App= function (){
  const buttonText={text:'Click me'}
  return (
    <div>
    <label className='label' htmlFor='name'>Enter your name</label>
    <input id="name" type="text"></input>
    <button style={{backgroundColor:'green', color:'white'}}>{buttonText.text}</button>
    </div>
  );
}


// take the react component and render 
ReactDOM.render(
  <App />,document.querySelector('#root')
)