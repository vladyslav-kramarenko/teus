import axios from 'axios';

const PROXY_BASE_URL = 'https://proxy.teus-group.com/api/hubspot/crm/v3/objects';

export const createContact = async (data) => {
    try {
        const response = await axios.post(
            `${PROXY_BASE_URL}/contacts`,
            { properties: data }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating contact:', error);
        throw error;
    }
};

export const createDeal = async (contactId, dealData) => {
    try {
        const contactToDealAssociation = '3';
        const response = await axios.post(
            `${PROXY_BASE_URL}/deals`,
            {
                properties: dealData.properties,
                associations: [
                    {
                        to: { id: contactId },
                        types: [
                            {
                                associationCategory: 'HUBSPOT_DEFINED',
                                associationTypeId: contactToDealAssociation
                            }
                        ]
                    }
                ]
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating deal:', error);
        throw error;
    }
};

export const createGPlusEntry = async (crmData) => {
    try {
        const response = await axios.post('https://proxy.teus-group.com/api/g-plus', crmData);
        return response.data;
    } catch (error) {
        console.error('Error creating CRM entry:', error);
        throw error;
    }
};
