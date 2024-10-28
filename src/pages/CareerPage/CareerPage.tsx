import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CareerPage.css';

const CMS_URL = process.env.REACT_APP_CMS_URL;

interface Vacancy {
    id: number;
    title: string;
    location: string;
    url: string;
}

const CareerPage: React.FC = () => {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                const response = await axios.get(`${CMS_URL}/api/vacancies?populate=*`);
                setVacancies(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching vacancies:", error);
                setLoading(false);
            }
        };
        fetchVacancies();
    }, []);

    if (loading) {
        return <div className="loading">Loading vacancies...</div>;
    }

    const handleTileClick = (url: string) => {
        navigate(`/careers/${url}`);
    };

    return (
        <div className="career-page-container">
            <h1 className="section-title">Careers</h1>
            <div className="career-list">
                {vacancies.map((vacancy) => (
                    <div
                        key={vacancy.id}
                        className="career-item"
                        onClick={() => handleTileClick(vacancy.url)}
                    >
                        <h3>{vacancy.title}</h3>
                        <div className="location-wrapper">
                            <span className="location-label">Location:</span>
                            <span className="location">{vacancy.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerPage;
