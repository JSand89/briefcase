import React, { useRef } from 'react';
import styles from './Contact.module.css'
import emailjs from 'emailjs-com';

function Contact() {

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_v11dcot', 'template_glojneg', form.current, 'user_Us9q5YQvTHeWQwaJkOnWh')
        .then((result) => {
            alert('Your message is sent successfully!')
        }, (error) => {
            alert(error.message)
        });
        e.target.reset();
    }

    return (
        <section id="contact">
        <div className={styles.containerContactMe}>
            <div className={styles.contacMe}>
            <h2 className={styles.titleProject}>Contact</h2>
            </div>
            <div className={styles.pContac}>
                <a href="https://github.com/JSand89">GitHub</a> 
                <a href="https://www.linkedin.com/in/javier-sanchez-1551a9155/">Linkedin</a> 
            </div>
            
             <div className={styles.formContainer}>

                <form ref={form} onSubmit={sendEmail}>
                    <h2 className={styles.title}>Send me an email</h2>
                    <div>
                        <label className={styles.labels}>Name</label>
                        <input className={styles.inputs} type="text" name="to_name" placeholder="Name"></input>
                    </div>
                    <div>
                        <label className={styles.labels}>Email</label>
                        <input className={styles.inputs} type="text" name="from_name" placeholder="Email"></input>
                    </div>
                    <div>
                        <label className={styles.labels}>Message</label>
                        <input className={styles.inputs} type="text"  name="message" placeholder="Message"></input>
                    </div>
                    <div>
                        <input className={styles.submit} type="submit" value="Send message"></input>
                    </div>

                </form>
            </div>
        </div>
        </section>
    )
}

export default Contact