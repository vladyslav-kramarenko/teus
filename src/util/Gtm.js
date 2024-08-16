const insertGtmScript = () => {
    const gtmId = process.env.REACT_APP_GTM_ID;
    if (!gtmId) {
        console.warn('GTM ID not found');
        return;
    }

    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
    document.head.appendChild(scriptTag);

    const inlineScript = document.createElement('script');
    inlineScript.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtmId}');
  `;
    document.head.appendChild(inlineScript);
};

export default insertGtmScript;
