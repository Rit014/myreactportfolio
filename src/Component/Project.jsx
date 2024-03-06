import React from 'react';
import './style.css';

const Project = () => {
    return (
        <>
            <section>
                <div className='project_section'>
                    <div className="heading_section">
                    <h1 style={{ textAlign: 'center' }}>Work</h1>
                    <hr style={{
                        width: '100px',
                        color: "cyan",
                        textAlign: 'center',
                        margin: '0 625px 10px',
                        border: '1px solid cyan',
                    }}
                    />
                    <p style={{textAlign: 'center'}}>
                        Check out some of my most recent work
                    </p>
                    <div className='grid_class'>
                        <div 
                            style={{backgroundColor: 'black'}}
                            className="grid_here">
                            Project 1
                        </div>
                        <div 
                            style={{backgroundColor: 'black'}}
                            className="grid_here">
                            Project 2
                        </div>
                        <div 
                            style={{backgroundColor: 'black'}}
                            className="grid_here">
                            Project 3
                        </div>
                        <div 
                            style={{backgroundColor: 'black'}}
                            className="grid_here">
                            Project 4
                        </div>
                        <div 
                            style={{backgroundColor: 'black'}}
                            className="grid_here">
                            Project 5
                        </div>
                        <div 
                            style={{backgroundColor: 'black'}}
                            className="grid_here">
                            Project 6
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;