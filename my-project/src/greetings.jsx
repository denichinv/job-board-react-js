
import  {useState} from 'react'

const Greetings = () => {

    const [inputValue, setInputValue] = useState("")
    const [name,setName] = useState("Guest")
    const [isVisible, setIsVisible] = useState(true)

const updateName = () => {
    inputValue.trim() === "" ? setName(name): setName(inputValue)
    setInputValue("")
    changeVisibility()
}
const handleChange = (input) => {
    setInputValue(input.target.value)
    
}

const changeVisibility = () => {
setIsVisible(!isVisible)
}

const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        console.log("enter");
        
        updateName()
    }
}
    
  return (
    <div>
     <h1><b>Hello, {name}! </b></h1>
     <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}  style={{visibility: isVisible? "visible":"hidden"}} />
     <button onClick={updateName}  style={{visibility: isVisible? "visible":"hidden"}}>Enter your name</button> 
    </div>
  )
}

export default Greetings
