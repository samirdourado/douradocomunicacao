import { House, Phone, Mail } from 'lucide-react';
import { LineMdFacebook } from '../icons/facebook';
import Link from 'next/link';
import LineMdInstagram from '../icons/instagram';
import MdiGoogleMyBusiness from '../icons/merchant';

const Contact = () => {
  return (
    <footer
      id='contato'
      className='flex flex-col items-center bg-(--bg) w-full px-4 pt-20 pb-20 lg:pb-0 mb-12'
    >
      <div className='w-full max-w-7xl flex flex-col items-center gap-8'>
        <h3 className='text-3xl md:text-4xl font-bold text-(--text)'>
          Entre em contato
        </h3>
        <section className='w-full lg:text-left flex flex-col gap-6 lg:flex-row justify-between'>
          <form className='w-full flex flex-col gap-2 lg:w-1/2 '>
            <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
              <label className='w-full text-lg' htmlFor='name'>
                Nome:
              </label>
              <input
                className='w-full pl-0.5 h-9 bg-(--bg-third)'
                id='name'
                type='text'
                placeholder='Digite seu nome.'
              />
            </fieldset>
            <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
              <label className='w-full text-lg' htmlFor='email'>
                E-mail
              </label>
              <input
                className='w-full pl-0.5 h-9 bg-(--bg-third)'
                id='email'
                type='email'
                placeholder='Digite seu e-mail.'
              />
            </fieldset>
            <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
              <label className='w-full text-lg' htmlFor='message'>
                Mensagem
              </label>
              <textarea
                className='w-full h-32 p-0.5 bg-(--bg-third) resize-y'
                id='message'
                placeholder='Digite sua mensagem.'
              />
            </fieldset>
            <button
              type='submit'
              className='w-full p-3 bg-(--color-secondary) text-(--grey0) text-center font-bold cursor-pointer lg:mb-14 transition-all duration-300 ease-in-out hover:bg-(--accent) hover:scale-[1.02] hover:shadow-lg'
            >
              Enviar
            </button>
          </form>
          <section className='text-left flex flex-col gap-6'>
            <p className='flex gap-2 items-center font-bold'>
              <House
                size={28}
                className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]'
              />{' '}
              São Paulo, SP
            </p>
            <p className='flex gap-2 items-center font-bold'>
              <Phone
                size={28}
                className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]'
              />{' '}
              11 96827-6100
            </p>
            <p className='flex gap-2 items-center font-bold'>
              <Mail
                size={28}
                className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]'
              />{' '}
              contato@douradocomunicacao.com.br
            </p>
            <div className='flex gap-2'>
              <Link
                href={'https://www.instagram.com/_douradocomunicacao/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LineMdInstagram className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]' />
              </Link>
              <Link
                href={'https://www.facebook.com/douradocomunicacao'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LineMdFacebook className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]' />
              </Link>
              <Link
                href={'https://share.google/NLgY0oebGvhNo5cDf'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MdiGoogleMyBusiness className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]' />
              </Link>
            </div>
            <h6>Desenvolvimento Web | Comunicação Visual</h6>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Contact;
