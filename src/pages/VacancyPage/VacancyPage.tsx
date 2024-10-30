import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchVacancyData } from '../../services/vacancyService';
import './VacancyPage.css';
import {Vacancy} from "../../types/Vacancy";
import TextFormatter from "../../components/TextFormatter";

const VacancyPage: React.FC = () => {
    const { vacancyURL } = useParams<{ vacancyURL: string }>();
    const navigate = useNavigate();
    const [vacancy, setVacancy] = useState<Vacancy | null>(null);

    useEffect(() => {
        const loadVacancy = async () => {
            const vacancyData = await fetchVacancyData(vacancyURL!);
            setVacancy(vacancyData);
        };

        loadVacancy();
    }, [vacancyURL]);

    const handleApplication = () => {
        navigate(`/careers/${vacancyURL}/apply`);
    };

    return (
        <section className="vacancy-section">
            <div className="vacancy-page-container">
                {vacancy ? (
                    <>
                        <h1 className="vacancy-title">{vacancy.title}</h1>

                        <div className="vacancy-description">
                            <TextFormatter content={vacancy.description}/>
                        </div>

                        {/*<p className="vacancy-description">{vacancy.description}</p>*/}
                        <h3 className="vacancy-subtitle">Requirements</h3>


                        <div className="vacancy-requirements">
                            <TextFormatter content={vacancy.requirements}/>
                        </div>

                        {/*<p className="vacancy-requirements">{vacancy.requirements}</p>*/}
                        <button className="application-button" onClick={handleApplication}>
                            Submit Application
                        </button>
                    </>
                ) : (
                    <p>Loading vacancy...</p>
                )}
            </div>
        </section>
    );
};

export default VacancyPage;
