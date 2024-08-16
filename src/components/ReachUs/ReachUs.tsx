import React, { useState } from 'react';
import './ReachUs.css';
import titleImage from '../../assets/images/reach_us.webp';
import ModalMessage from "../ModalMessage/ModalMessage";
// import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { createContact, createDeal, createGPlusEntry } from '../../util/crmApi';
import { saveUTMParams } from "../../util/saveUTMParams";

const ReachUs: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [formData, setFormData] = useState<{
        name: string;
        phone: string | undefined;
        message: string;
    }>({
        name: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState<{
        name?: string;
        phone?: string;
        message?: string;
    }>({});

    const validatePhone = (phone: string) => {
        const phoneRegex = /^[+]?[0-9\s\-().]{7,15}$/;
        return phoneRegex.test(phone);
    };

    const validateForm = () => {
        const newErrors: { name?: string; phone?: string;} = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        }else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        // if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        const utmParams = saveUTMParams();  // Get the saved UTM parameters

        const contactData = {
            firstname: formData.name,
            phone: formData.phone,
            hs_language: "en",
            website: "teus-group.com",
            lifecyclestage: 'lead',
            ...utmParams,  // Include UTM parameters in the contact data
        };

        const gPlusData = {
            name: formData.name,
            phone: formData.phone,
            // email: formData.email, // Add email field if necessary
            note: formData.message,
            lang: 'en',
            ...utmParams,  // Include UTM parameters in the CRM data
        };

        try {
            // Create Contact
            const contactResponse = await createContact(contactData);
            const contactId = contactResponse.id;

            // Create Deal associated with the Contact
            const dealData = {
                properties: {
                    dealname: formData.name,
                    dealstage: '522672623',
                    pipeline: '330883560',
                    lead_source: 'site - teus-group.com',
                    comment: formData.message,
                    ...utmParams,  // Include UTM parameters in the deal data
                }
            };

            await createDeal(contactId, dealData);
            await createGPlusEntry(gPlusData);

            setModalMessage("Thank You for Your Message! Our manager will contact you soon");
            setIsModalOpen(true);
            console.log('Contact and Deal created successfully');
        } catch (error) {
            console.error('Error creating contact or deal:', error);
        }

    };

    return (
        <section id="contact" className="contact-form">
            <img src={titleImage} alt="Reach Us" className="contact-form-title" />
            <div className={"contact-form-container"}>
                <p className={"contact-form-description"}>
                    Highly skilled teams together with long-term proven suppliers enable them to create projects of the
                    latest standards: architectural excellence, energy-efficient design, sustainable construction materials,
                    smart home features, green spaces, amenities, high-quality finishes and many others.
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="NAME"
                            onChange={handleChange}
                            value={formData.name}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="PHONE"
                            onChange={handleChange}
                            value={formData.phone}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="message"
                            placeholder="MESSAGE"
                            onChange={handleChange}
                            value={formData.message}
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                    <button type="submit">Send & Get Feedback</button>
                </form>
                {/*<PhoneInput*/}
                {/*    placeholder="PHONE"*/}
                {/*    value={formData.phone}*/}
                {/*    onChange={(value) => setFormData({...formData, phone: value})}*/}
                {/*/>*/}
                {/*<textarea name="message" placeholder="MESSAGE" onChange={handleChange}*/}
                {/*          value={formData.message}></textarea>*/}
                <ModalMessage
                    isOpen={isModalOpen}
                    message={modalMessage}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </section>
    );
}

export default ReachUs;

//
// <PhoneInput
//     international
//     // defaultCountry={intl.locale === "en" ? "US" : intl.locale.toString().toUpperCase()}
//     defaultCountry="US"
//     value={phone}
//     onChange={setPhone}
//     // placeholder={intl.formatMessage({id: 'phone'})}
//     placeholder="phone"
//     // labels={labels[intl.locale]}
// />
