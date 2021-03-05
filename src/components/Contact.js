import React from 'react';
import ContactLink from './ContactLink';
import Resume from '../img/Anastasia I. Resume.pdf';

function Contact() {
    return (
        <div className="row contain">
        <div className="col-md-2"></div>
       <div className="col-md-8">
           <div className="card bg-transparent">
               <div className="card-body box">
                    <h1>My Information</h1>
            <hr />
            <p>My phone number: ‪(619) 451-4545‬</p>
            <ContactLink type="email" href="mailto:ana.ivas27@gmail.com">
                ana.ivas27@gmail.com
                        </ContactLink>
            <ContactLink type="Resume" href={Resume} target="blank">
                Download
                        </ContactLink>
            <ContactLink type="LinkedIn Profile" href="https://www.linkedin.com/in/anastasia-ivashchenko-bbb196107/" target="blank">
                Anastasia Ivashchenko
                        </ContactLink>
            <ContactLink type="GitHub Profile" href="https://github.com/anaiva27" target="blank">
                Anaiva27
                        </ContactLink>

        </div>
        </div>
        </div>
    </div>)
}

export default Contact;