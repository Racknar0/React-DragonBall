import React from 'react';
import Card from '../components/Card';
import { Characters } from '../models/Characters';

import './ManScreen.css'

const ManScreen = () => {
    const mans = Characters.filter((character) => character.type === 'h');


    return (
        <div className="background">
            <div className='container d-flex flex-wrap justify-content-center'>
                <h1 className='text-white fw-bold text-center pt-5'>Mans Screen</h1>
                <hr />
                <div className='row d-flex flex-wrap justify-content-center'>
                    {mans.map((man) => (
                        <Card key={man.id} {...man} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManScreen;
