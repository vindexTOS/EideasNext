"use client"
import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <form className="contact-form contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="სახელი" placeholder="სახელი" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="ემაილი" placeholder="ემაილი*" type="email" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="თემა" placeholder="თემა" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="შეკითხვა" placeholder="შეკითხვა *" autoComplete='off' required></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            <i className="fa fa-paper-plane"></i> შეკითხვის გაგზავნა
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;