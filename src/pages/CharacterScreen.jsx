import React from 'react'
import { useParams } from 'react-router'

const CharacterScreen = () => {

    const {id} = useParams()
    


  return (
    <div>
        {id}
    </div>
  )
}

export default CharacterScreen