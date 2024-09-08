import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe     
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12829.432518573007!2d44.827097!3d41.715139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446b7d3f1d3f83%3A0x2a2b4de3483d02f8!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1655444465814!5m2!1sen!2sus"

                     ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;