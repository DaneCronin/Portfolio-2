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
    return (
      <div
      id="contact"
      className="w-full h-screen"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">
            Contact
          </p>
          <p className="py-6">Submit the form and get in touch!</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            action="mailto:danecronin@gmail.com"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none my-4"
              required
            />
            <textarea
              type="text"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              required
            />
            {errorMessage && (
              <div className="pb-6">
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="text-100  bg-zinc-900  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-700">
              Reach out
            </button>
          </form>
        </div>
      </div>
    </div>
    )
};

export default ContactForm;