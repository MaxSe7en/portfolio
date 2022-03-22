import React from 'react'
import './features.css'
import Feature from '../../Components/Feature/Feature'


const featuresData = [
    {
        title: 'iFerch Driver (Android).',
        text: 'link: https://play.google.com/store/apps/details?id=com.iferch.driver. Stack: Android (Java), PHP.',
    },
    {
        title: 'iFerch (Android).',
        text: 'link: https://play.google.com/store/apps/details?id=com.iferch.user. Stack: Android (Java), PHP.',
    },
    {
        title: 'iFerch (Business).',
        text: 'link: https://www.iferch.com/business. Stack: React.js,MySQL, PHP.',
    },
    {
        title: 'Blog (Web).',
        text: 'link: https://dreamerslake.com/kohana/blog. Stack: Kohana, MySQL, PHP, JavaScript, HTML, CSS, JQuery, Bootstrap.',
    },
];
const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">WORK EXPERIENCE</h1>
                {/* <p>Request Early Access to Get Started</p> */}
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
