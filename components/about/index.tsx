'use client';
import Image from 'next/image';
import sendWhatsAppMessage from '@/utils/whatsapp';

const About = () => {
  return (
    <section
      id='sobre'
      className='flex flex-col items-center bg-(--grey1) w-full px-4 pt-14 pb-14 lg:pb-0 mb-12'
    >
      <div className='w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between gap-8'>
        <div className='w-full h-full lg:w-1/2 text-center lg:text-left flex flex-col gap-7 lg:gap-5 lg:justify-between'>
          <h2 className='text-3xl md:text-4xl font-bold text-(--grey2)'>
            Sua parceira na criação de experiências digitais.
          </h2>
          <p className='text-(--grey2)'>
            Na{' '}
            <span className='text-(--accent) font-bold'>
              Dourado Comunicação
            </span>
            , ajudamos negócios e profissionais a consolidarem sua presença na
            web.
          </p>
          <p className='text-(--grey2)'>
            Desenvolvemos plataformas completas, integrando tecnologia e design
            responsivo em sites modernos, otimizados e prontos para conectar sua
            marca ao público certo e impulsionar seus resultados no ambiente
            online.
          </p>
          <button
            type='button'
            className='w-full p-4 bg-(--accent) text-(--grey1) text-center font-bold cursor-pointer lg:mb-14 transition-all duration-300 ease-in-out hover:bg-(--color-secondary) hover:scale-[1.02] hover:shadow-lg'
            onClick={sendWhatsAppMessage}
          >
            Fale nonosco
          </button>
        </div>
        <figure className='hidden lg:flex'>
          <Image
            src={'/people.png'}
            width={446}
            height={481}
            alt='Home e mulher usando o celular'
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
