import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ApplicationFormData } from '../../types/ApplicationFormData';
import {useParams} from "react-router-dom";
import {fetchVacancyData} from "../../services/vacancyService";
import './VacancyFormPage.css';
import ModalMessage from "../../components/ModalMessage/ModalMessage";

const BACKEND_URL = process.env.REACT_APP_PROXY_URL;
const VacancyFormPage: React.FC = () => {
    const { vacancyURL } = useParams<{ vacancyURL: string }>(); // Get vacancy URL from route parameters
    const [vacancyTitle, setVacancyTitle] = useState<string | null>(null); // Store vacancy title
    const [formData, setFormData] = useState<ApplicationFormData>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        resume: null,
    });
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [modalMessage, setModalMessage] = useState(''); // Message for Modal

    useEffect(() => {
        const fetchData = async () => {
            if (vacancyURL) {
                const vacancyData = await fetchVacancyData(vacancyURL);
                if (vacancyData) {
                    setVacancyTitle(vacancyData.title); // Set vacancy title
                }
            }
        };
        fetchData();
    }, [vacancyURL]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            resume: e.target.files ? e.target.files[0] : null,
        }));
    };

    // Function to convert file to Base64
    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const utmParams = JSON.parse(localStorage.getItem('utmParams') || '{}');
        const formDataWithUTM = { ...formData, ...utmParams };

        const applicationData = new FormData();
        Object.entries(formDataWithUTM).forEach(([key, value]) => {
            if (value !== null) {
                applicationData.append(key, value as string | Blob);
            }
        });

        try {
            await axios.post(`${BACKEND_URL}/api/vacancies/apply`, applicationData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setModalMessage('Application submitted successfully!');
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error submitting application:', error);
            setModalMessage('Failed to submit application. Please try again.');
            setIsModalOpen(true);
        }
    };

    return (
        <section className="vacancy-form-section">
            <div className="vacancy-form-container">
                {vacancyTitle && <h2>{vacancyTitle}</h2>} {/* Display vacancy title */}
                <h1>Application Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>NAME</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        required
                    />

                    <label>SURNAME</label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        onChange={handleInputChange}
                        required
                    />

                    <label>EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        required
                    />

                    <label>PHONE</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleInputChange}
                        required
                    />

                    <label>RESUME</label>
                    <input type="file" name="resume" onChange={handleFileChange} required />

                    <button type="submit" className="submit-button">
                        Apply Now
                    </button>
                </form>
            </div>
            <ModalMessage
                isOpen={isModalOpen}
                message={modalMessage}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default VacancyFormPage;