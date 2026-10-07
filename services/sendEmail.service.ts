
import iSendEmail from '@/interfaces/sendEmail.interface';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const apiKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const sendEmail = async (formData: iSendEmail) => {
  if (!serviceId || !apiKey) {
    toast.error('Tente outra forma de contato');
    return;
  }

  const templateParams  = {
    from_name: formData.name,
    phone: formData.phone,
    email: formData.email,
    message: formData.text
  };

  try {
    await emailjs.send(
      serviceId,
      'contato_site_dc',
      templateParams,
      { publicKey: apiKey }
    );

    toast.success('Email enviado')
  } catch (error) {
    console.error(error)
    toast.error('Algo deu errado')
  };
};

export default sendEmail;