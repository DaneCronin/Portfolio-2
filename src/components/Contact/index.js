import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
 
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    //Submit Handler
    const handleSubmit = (e) => {
        e.prevent.default();
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    //Handle email and message form validation
    const handleChange = (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
    };


    //Return JSX to display
    return(
        <section>
             <h1>Contact me</h1>
             <p>Please fill out the form and get in touch!</p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Send!</button>
      </form>

        </section>
    );

};

export default ContactForm;