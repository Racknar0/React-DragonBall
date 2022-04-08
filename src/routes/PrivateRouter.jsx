import React from 'react'
import { Router } from 'react-router-dom'

const PrivateRouter = ({component: Component}) => {
  return (
    <Router component={<Component />} />
  )
}

export default PrivateRouter