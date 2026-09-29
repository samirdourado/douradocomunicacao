const sendWhatsAppMessage = () => {
    const phoneNumber = "5511968276100";
    const message = encodeURI('Olá! Vim pelo site.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    if (typeof window !== "undefined") {
        window.open(url, '_blank', 'noopener, noreferrer');
    }
};

export default sendWhatsAppMessage;