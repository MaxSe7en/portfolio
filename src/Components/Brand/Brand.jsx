import React from 'react';
import './brand.css';

import { android, flutter, html, javascript, java, react } from '../Brand/import'

const Brand = () => {
    return (<div className="gpt3__brand section__padding">
        <div>
            <img className='gpt3__img_size' src={android} alt="google" />
        </div>
        <div>
            <img className='gpt3__img_size' src={flutter} alt="slack" />
        </div>
        <div>
            <img className='gpt3__img_size' src={html} alt="dropbox" />
        </div>
        <div>
            <img className='gpt3__img_size' src={javascript} alt="aa" />
        </div>
        <div>
            <img className='gpt3__img_size' src={java} alt="dd" />
        </div>
        <div>
            <img className='gpt3__img_size' src={react} alt="dd" />
        </div>
    </div>
    )
}

export default Brand
