import React, {Fragment} from "react"
import Provider from "./provider"
import Context from "./context"

const Agents = () => {
  return <AgentOne/>
}
const AgentOne = () => {
  return <AgentTwo/>
}
const AgentTwo = () => {
  return <AgentBond/>
}
const AgentBond = () => {
  return(
    <Context.Consumer>
     { context => (
         <Fragment>
         <h1> Agent Information</h1>
         <h3>Mission name : {context.data.mname} </h3>
         <h2>Agent Name: {context.data.agent}</h2>
         <h2>Mission Status: {context.data.accept}</h2>
         <button onClick={context.isMissionAccepted}>Choose to accept</button>
         
         </Fragment>

       )}
    
    </Context.Consumer>


  )
}

const App = () =>{

  return(
    <div>
    <h1> Context API</h1>

    <Provider>
    <Agents/>
    </Provider>
    </div>
  )
}

export default App;