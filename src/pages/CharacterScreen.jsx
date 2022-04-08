import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters'

const CharacterScreen = ({history}) => {

    const {id} = useParams()
    const {type, description, name} = Characters.find(character => character.id === id)
    const path = `/assets/${type}-${id}.png`

    const handleBack = () => {
        history.goBack()
    }
  return (
    <div className='container row mt-5'>
        <div className='col-8 d-flex justify-content-center'>
            <img className='img-thumbnail mt-3 img-fluid ' src={path} alt={id} style={{
                /* width: '100%', */
                maxHeight: '400px'
            }} />
        </div>
        <div className='col-4'>
            <h2>Nombre: {name}</h2>
            <p>Descripción: {description}</p>
            <button className='btn btn-outline-danger' onClick={handleBack}>Go Back</button>
        </div>
    </div>
  )
}

export default CharacterScreen