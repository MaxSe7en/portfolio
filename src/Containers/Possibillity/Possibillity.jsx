import React from 'react'
import './possibillity.css'
import possibilityImage from '../../asserts/possibility.png';

const Possibillity = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                {/* <h4>Request Early Access to Get Started</h4> */}
                <h1 className="gradient__text">Skills <br /></h1>
                <ul>
                    <li className='gpt3__skills'>Android development with Kotlin and Java</li>
                    <li className='gpt3__skills'>Frontend development with ReactJS, Flutter Web</li>
                    <li className='gpt3__skills'>Cross Platform mobile application development Flutter</li>
                    <li className='gpt3__skills'>Web development with PHP.</li>
                    <li className='gpt3__skills'>Good communication, interpersonal and organizational skills.</li>
                    <li className='gpt3__skills'>Creative, problem solving, investigative, numeracy and analytical skills.</li>
                    <li className='gpt3__skills'>Ability to work with or without supervision.</li>
                </ul>
                <h4>"Programming isn't about what you know, it's about what you can figure out.” - Chris Pine</h4>
            </div>
        </div>
    )
}

export default Possibillity
