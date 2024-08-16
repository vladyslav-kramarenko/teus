import React, { useState } from 'react';
import './ReachUs.css';
import titleImage from '../../assets/images/reach_us.webp';
import ModalMessage from "../ModalMessage/ModalMessage";
// import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { createContact, createDeal } from '../../util/hubspotApi';
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const utmParams = saveUTMParams();  // Get the saved UTM parameters

        const contactData = {
            firstname: formData.name,
            phone: formData.phone,
            hs_language: "en",
            website: "teus-group.com",
            lifecyclestage: 'lead',
            ...utmParams,  // Include UTM parameters in the contact data
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
                    <input type="text" name="name" placeholder="NAME" onChange={handleChange} value={formData.name}/>
                    <input type="text" name="phone" placeholder="PHONE" onChange={handleChange} value={formData.phone}/>
                    <input type="text" name="message" placeholder="message" onChange={handleChange} value={formData.message}/>
                    {/*<PhoneInput*/}
                    {/*    placeholder="PHONE"*/}
                    {/*    value={formData.phone}*/}
                    {/*    onChange={(value) => setFormData({...formData, phone: value})}*/}
                    {/*/>*/}
                    {/*<textarea name="message" placeholder="MESSAGE" onChange={handleChange}*/}
                    {/*          value={formData.message}></textarea>*/}
                    <button type="submit">Send & Get Feedback</button>
                </form>
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


// <input
//     type="text"
//     // placeholder={intl.formatMessage({id: 'name'})}
//     placeholder='name'
//     // maxLength='20'
//     value={name}
//     onChange={e => setName(e.target.value)}
// />
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
