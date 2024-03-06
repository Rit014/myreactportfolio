import React, {useState, useEffect} from 'react';
import './style.css';
import ReactImg from './images/image3.jpg';
import resume from "./Resume/Documnet Type_Ritu Panchal CV.pdf";
import {slider} from './Data';

const About = () => {
    return (
        <>
            <section>
            <div className="heading">
                <h1 className="about">ABOUT ME</h1>
                <hr style={{
                    width: '25%', 
                    color: "blue",
                    textAlign: 'center',
                    margin: '0 508px 10px',
                    border: '1px solid black',
                }}
                />
                <img src={ReactImg} alt="" />
                <div className="inner_div_two">
                   
                    <div className="progress_div">
                       {slider.map((Val) => {
                        const {text, width} = Val;
                        return(
                            <>
                               <div style={{ width: '80%'}}>
                                <span style={{fontWeight: "bold", fontSize: "20px", color: 'black'}}>{text}</span>
                                <div id="slider">
                                    <div style={{width: `${width}`}} id="inner-slider">
                                       <p>{`${width}`}</p>
                                    </div>
                                </div>
                               </div>
                            </>
                        )
                       })}
                    </div>
                </div>
                <div className="about_me">
                    <p>Hello, I'm Ritu Panchal, nice to meet you. please take a look around<br />
                        A goal-oriented <span>Entry Level Frontend Developer</span> with Knowledge of HTML, CSS, JavaScript,
                        ReactJS.
                        I simpliy enjoy working on code and create attractive websites. <br />
                    </p>
                    <a href={resume} download><button>Download CV</button></a>
                </div>
            </div>
            </section>
            
        </>
    );
};

export default About;