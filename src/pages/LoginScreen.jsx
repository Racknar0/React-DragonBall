import {useContext} from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'

import './LoginScreen.css'

const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = () => {

    dispatch({type: authTypes.login})

    navigate('/')
  }

  return (
    <div className='container mt-5 text-center containerLogin'>
        <img src="/assets/animate.gif" alt="animacion" />
        <button className='botonLogin' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginScreen