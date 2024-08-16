export const saveUTMParams = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_keyword', 'utm_position', 'utm_matchtype', 'utm_device'];

    const utmParams = {};

    utmKeys.forEach(key => {
        const value = urlParams.get(key) || localStorage.getItem(key);
        if (value) {
            localStorage.setItem(key, value);
            utmParams[key] = value;
        }
    });

    return utmParams;
};