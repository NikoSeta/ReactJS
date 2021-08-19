import React from 'react'
import {Card1} from './Card1';

function Cards() {
    return (
            <div className='container d-flex justify-content-center h-100'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card1/>
                    </div>
                    <div className='col-md-4'>
                        <Card1/>
                    </div>
                    <div className='col-md-4'>
                        <Card1/>
                    </div>
                </div>
            </div>
    )
}

export default Cards
