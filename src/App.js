import { useReducer,useEffect } from 'react'
import LoginRouter from './routes/LoginRouter'
import { AuthContext } from './context/AuthContext'
import { AuthReducer } from './reducers/AuthReducer'



const init = () => {
  return JSON.parse(localStorage.getItem('log')) || {log: false}
}

const App = () => {

  const [log, dispatch] = useReducer(AuthReducer, {}, third)

  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(log))
  }, [log])
  

  return (
    <LoginRouter />
  )
}

export default App