import React, { useContext, useState } from 'react';
import Notes from './Notes';


const Home = () => {
    return (
        <div>
            <div className='container'>
                <Notes/>
            </div>
        </div>
    )
}

export default Home;