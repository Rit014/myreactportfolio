import React from 'react';

const Contact = () => {
    return (
        <>
            <section>
                <div className='contact_section'>
                    <div className="contact_heading">
                        <h1 style={{ textAlign: 'center' }}>Contact</h1>
                        <hr style={{
                            width: '100px',
                            color: "cyan",
                            textAlign: 'center',
                            margin: '0 625px 10px',
                            border: '1px solid cyan',
                        }}
                        />
                        <p style={{ textAlign: 'center' }}>
                            Send me a message
                        </p>
                    </div>
                    <div className='grid_section'>
                        <input
                            type="text" placeholder='name'
                            className='input_field'
                        />
                        <input 
                            type="text" 
                            placeholder='Email' 
                            className='input_field'
                        />
                        <textarea name="message" cols="30" rows="10" placeholder='message' className='text_field'></textarea>
                    </div>
                    <button id="btn3">Let's Collaborate</button>
                </div>
            </section>
        </>
    )
}

export default Contact;