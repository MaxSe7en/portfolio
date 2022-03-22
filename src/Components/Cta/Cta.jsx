import React from 'react';
import './cta.css';


const Cta = () => {
    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Want to see more?</p>
                <h3>Check out my github repository</h3>
            </div>
            <a href='https://github.com/MaxSe7en/' target="_blank" className="gpt3__cta-btn" rel="noreferrer">
                <button type="button">Check Out</button>
            </a>
        </div>
    )
}

export default Cta;
