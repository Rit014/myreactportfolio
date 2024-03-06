import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css';
import ReactImg from './images/image1.jpg';
import {Link} from 'react-router-dom'
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Navbar = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <h1 style={{color: 'white', fontSize: '24px'}}>Ritu Panchal</h1>
                    </div>
                    <div className="menu-links">
                        <ul className="menu-items">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/project">PROJECT</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section>
                <div className="main-div">
                <div className="img-div">
                     <img src={ReactImg} />
                </div>
                    <div className="inner-div">
                    <h1>About this site</h1>
                        <p>
                            Hello visitor, welcome in my Portfolio website... <br />
                            Let's know about my work and skill experience
                        </p>
                        <div className="inner-elem">
                            <ul className="icons">
                                <li><a href=""><LinkedInIcon /></a></li>
                                <li><a href=""><GitHubIcon /></a></li>
                                <li><a href=""><InstagramIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <About />
            </section>
            <section>
                <Project />
            </section>
            <section>
                <Contact />
            </section>
        </>
    )
}

export default Navbar;

