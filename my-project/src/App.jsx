
import './App.css'
import Greetings from './greetings'
import JobBoard from './JobBoard'
import DynamicInput from './dynamicInputForm'
import BotListManager from './BotListManager'
import Header from './header'

function App() {


  return (
    <div>
    <Header></Header>
    <Greetings/>
    <JobBoard/>
    <BotListManager/>
    <DynamicInput/>
    </div>
  )
}

export default App
