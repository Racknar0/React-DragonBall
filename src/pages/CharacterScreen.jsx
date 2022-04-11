import React from 'react'
import { Characters } from '../models/Characters'
import { useNavigate, useParams } from 'react-router-dom';

const CharacterScreen = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const {type, description, name} = Characters.find(character => character.id === id)
    const path = `/assets/${type}-${id}.png`

    const handleBack = () => {
        navigate(-1)
    }
  return (
    <div className='container row mt-5'>
        <div className='col-8 d-flex justify-content-center'>
            <img className='img-thumbnail mt-3 img-fluid ' src={path} alt={id} style={{
                /* width: '100%', */
                height: '400px'
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