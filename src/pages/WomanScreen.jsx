import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

import './WomenScren.css'

const WomanScreen = () => {

  const womans = Characters.filter(character => character.type === 'm')
  

  return (
<div className="background">
<div className='container d-flex flex-wrap justify-content-center'>
                <h1 className='text-white fw-bold text-center pt-5'>Womans Screen</h1>
                <hr />
                <div className='row d-flex flex-wrap justify-content-center'>
                    {womans.map((woman) => (
                        <Card key={woman.id} {...woman} />
                    ))}
                </div>
            </div>
</div>
  )
}



export default WomanScreen