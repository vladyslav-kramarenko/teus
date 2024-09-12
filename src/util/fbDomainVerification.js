const insertFbMetaTag  = () => {
    const fbId = process.env.REACT_APP_FB_DOMAIN_VERIFICATION_ID;
    if (!fbId) {
        console.warn('FB domain verification ID not found');
        return;
    }

    const metaTag = document.createElement('meta');
    metaTag.name = 'facebook-domain-verification';
    metaTag.content = fbId;

    document.head.appendChild(metaTag);
};

export default insertFbMetaTag;