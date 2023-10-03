import React, {useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';
export const Contactus =() => {
    const refForm =useRef();
    const handleSubmit=(event) => {
        event.preventDefault();
        console.log(refForm.current);
        const serviceId="service_pzygh9i"
        const templateId="template_fld4eik";
        //3 parametro;
        const apikey="xbWhDgUe_MIeaXG3V"
        emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
        .then(result => console.log(result.text))
        .catch(error => console.error(error))

    }

    return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
            <h2>contact Us</h2>
            <p>please fill thill form </p>
        </div>
    <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor=''>name</label>
        <input name='username' type='text' placeholder='Ingresa tu nombre' required/>
    </fieldset>
    <fieldset className='field-email'>
        <label className='symbol-required' name='email'>email</label>
        <input placeholder='Ingresa tu email @' type="email" name="email" id="email" required/>
    </fieldset>
    <fieldset className='field-message'>
        <label className='symbol-required' htmlFor=''>message</label>
        <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows></textarea>
    </fieldset>
        <button className="btn-send">Send</button>

        </form>
    )
}