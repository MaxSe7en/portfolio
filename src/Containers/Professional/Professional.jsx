import React from 'react'
import './professional.css'
import Feature from '../../Components/Feature/Feature'


const profesionalData = [
    {
        title: 'iFerch LLC. (Internship)',
        text: 'August 2019 – October 2020*.',
    },
    {
        title: 'iFerch LLC. (Frontend Developer)',
        text: 'November 2020 – October 2021.',
    },
    {
        title: 'Freelance Developer.',
        text: 'August 2021 – present',
    },
];
const Profesional = () => {
    return (
        <div className="gpt3__profesional section__padding" id="profesional">
            <div className="gpt3__profesional-heading">
                <h1 className="gradient__text">PROFESSIONAL EXPERIENCE</h1>
                {/* <p>Request Early Access to Get Started</p> */}
            </div>
            <div className="gpt3__profesional-container">
                {profesionalData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Profesional
