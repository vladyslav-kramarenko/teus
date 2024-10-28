import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

interface Vacancy {
    title: string;
    description: string;
    requirements: string;
}

export const fetchVacancyData = async (vacancyURL: string): Promise<Vacancy | null> => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/vacancies?filters[url][$eq]=${vacancyURL}`);
        const vacancyData = response.data.data[0];

        if (vacancyData) {
            return {
                title: vacancyData.title,
                description: vacancyData.description,
                requirements: vacancyData.requirements,
            };
        } else {
            console.error('Vacancy data not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching vacancy:', error);
        return null;
    }
};
