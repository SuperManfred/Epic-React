// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// import { useState } from 'react' 

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // const usernameInputRef = React.useRef() // 6.1
  // const [error, setError] = React.useState(null)  // 6.2 
  
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // const value = event.target.elements.usernameInput.value  // 6.0
    // const value = usernameInputRef.current.value // 6.1
    onSubmitUsername(username)   
    console.log('Your username is: ' + username)
  } 

  function handleChange(event) {
    const value = event.target.value
    // const isLowerCase = value === value.toLowerCase()   // 6.2 
    // setError(isLowerCase ? null : 'Username must be lower case')   // 6.2 
    console.log('This letter: ' + value )
    setUsername(value.toLowerCase(username))  // 6.3 
    console.log('to lowercase: ' + username)
  }

  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="usernameInput" >Username:</label>
        <input 
          // ref={usernameInputRef} // 6.2
          type="text" 
          id="usernameInput" 
          value={username}
          onChange={handleChange}
        />
      </div>
      {/* <div id="errorMessage" style={{color: 'red'}}>{error}</div>  */}
      <button 
        // disabled={Boolean(error)} // 6.2
        type="submit"
      >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
