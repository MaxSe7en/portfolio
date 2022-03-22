import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import Article from '../../Components/Article/Article'


const Blog = () => {
    return (
        <div>
            <div className="gpt3__blog section__padding" id="blog">
                <div className="gpt3__blog-heading">
                    <h1 className="gradient__text">A lot is happening, <br /> Here are projects I am working and/or planning to work on.</h1>
                </div>
                <div className="gpt3__blog-container">
                    <div className="gpt3__blog-container_groupA">
                        <Article imgUrl={blog01} date="Mar 26, 2022" text="Logistics & Business accounting App" />
                    </div>
                    <div className="gpt3__blog-container_groupB">
                        <Article imgUrl={blog02} date="Mar 26, 2022" text="Car Servicing App " />
                        <Article imgUrl={blog03} date="Mar 26, 2022" text="Latest Updates Technological advancement Blog" />
                        <Article imgUrl={blog04} date="Mar 26, 2021" text="Physician Appointment Booking App" />
                        <Article imgUrl={blog05} date="Sep 26, 2022" text="Computer Programming Tutorial App" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
