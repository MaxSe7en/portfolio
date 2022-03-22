import React from 'react'
import './header.css'
import people from '../../asserts/people.png'
import me from '../../asserts/me.jpg'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Welcome aboard! Let's build something amazing together
                </h1>
                <p>
                    I provide software solutions for businesses both mobile and websites
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    {/* <img src={people} alt="People" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                    </p> */}
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={me} alt="ai" />
            </div>
        </div>
    )
}

export default Header
