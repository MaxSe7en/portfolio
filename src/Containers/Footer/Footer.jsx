import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" id='footer'>
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Did you like what you see and need me to work on your project?</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Get in touch</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
                    <h1 className='gpt3__header'>MAX-7</h1>
                    <p>Se7en worlds, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    {/* <p>Overons</p> */}
                    <p>Social Media</p>
                    {/* <p>Counters</p> */}
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>nanayawfixing@gmail.com</p>
                    <p>+233 (0) 547-040-214</p>
                    {/* <p>info@payme.net</p> */}
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2022 MAX-7. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
