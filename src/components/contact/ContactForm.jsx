"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleForm = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Thanks for your message!");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                toast.error("Failed to send message.");
            }
        } catch (error) {
            toast.error("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleForm}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="name"
                            placeholder="სახელი"
                            type="text"
                            autoComplete='off'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <span className="alert-error"></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="email"
                            placeholder="ემაილი*"
                            type="email"
                            autoComplete='off'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="alert-error"></span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="subject"
                            placeholder="თემა"
                            type="text"
                            autoComplete='off'
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <span className="alert-error"></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group comments">
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="შეკითხვა *"
                            autoComplete='off'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button type="submit" name="submit" id="submit" disabled={loading}>
                        <i className="fa fa-paper-plane"></i> {loading ? 'Sending...' : 'შეკითხვის გაგზავნა'}
                    </button>
                </div>
            </div>
            <div className="col-lg-12 alert-notification">
                <div id="message" className="alert-msg"></div>
            </div>
        </form>
    );
};

export default ContactForm;