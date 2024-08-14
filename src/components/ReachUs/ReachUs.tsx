import React, {useState} from 'react';
import './ReachUs.css';
import titleImage from '../../assets/images/reach_us.webp'; // Replace with your title image path

const ReachUs: React.FC = () => {
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
            <img src={titleImage} alt="Reach Us" className="contact-form-title"/>
            <div className={"contact-form-container"}>
                <p className={"contact-form-description"}>
                    Highly skilled teams together
                    <br/>
                    with long-term` proven
                    <br/>
                    suppliers
                    enable them to create
                    <br/>projects of the
                    latest
                    <br/>standards: architectural excellence, energy-efficient design, sustainable construction
                    materials,
                    smart home features, green spaces, amenities, high-quality finishes and many others.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="NAME" onChange={handleChange} value={formData.name}/>
                    <input type="text" name="phone" placeholder="PHONE" onChange={handleChange} value={formData.phone}/>
                    <input type="text" name="message" placeholder="MESSAGE" onChange={handleChange} value={formData.message}/>
                    {/*<textarea name="message" placeholder="Message" onChange={handleChange}*/}
                    {/*          value={formData.message}></textarea>*/}
                    <button type="submit">Send & Get Feedback</button>
                </form>
            </div>
        </section>
    );
}

export default ReachUs;
