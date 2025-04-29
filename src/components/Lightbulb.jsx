import { useState } from "react"

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [isOn, setIsOn] = useState(false)
  const [isDisco, setIsDisco] = useState(false)

  const toggleLight = () => {
    // Toggle the on/off state
    console.log("Clicked");

    if (isOn) {
      setIsOn(false)
      setIsDisco(false)
    } else {
      setIsOn(true)
    }
  };

  const toggleDisco = () => {
    isDisco ? setIsDisco(false) : setIsDisco(true)
  }
  return (
    <div className="lightbulb-container">
      <div className={`lightbulb ${isOn ? 'on' : 'off'} ${isDisco ? 'disco' : ''}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
      <button className="disco-button" disabled={!isOn} onClick={toggleDisco} >Disco!</button>
    </div>
  );
};
