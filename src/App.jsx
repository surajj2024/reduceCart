import LeftCart from "./components/LeftCart"
import RightCart from "./components/RightCart"
import { initialState, reducer } from "./reducer/Reducer"
import { useReducer } from "react"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="flex justify-around pt-20 bg-[#cccccc] h-screen">
      <LeftCart state={state} dispatch={dispatch}/>
      <RightCart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
