// src/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} />
                <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
                <button type="submit">Send & Get Feedback</button>
            </form>
        </section>
    );
}

export default ContactForm;
