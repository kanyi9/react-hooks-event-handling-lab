import React from 'react'

function Keypad() {
  const handleInputChange = (event) => {
    console.log('Entering password...');
  }
  return (
    <div>Keypad
      <input type="password" onChange={handleInputChange}></input>
    </div>)}

export default Keypad;