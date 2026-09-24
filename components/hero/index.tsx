import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-30 px-4 md:px-0'>
      <div className='w-full md:w-1/2 text-center md:text-left'>
        <h1 className='text-4xl font-bold text-(--text-h)'>
          Bem-vindo à Dourado Comunicação
        </h1>
        <p className='mt-4 text-(--text)'>
          Criação de Landing Pages, Sites Institucionais e Otimização de Perfil
          no Google Meu Negócio.
        </p>
      </div>
      <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
        <Image
          src={'/hero-img-711-413.webp'}
          width={711}
          height={413}
          alt='Imagem de notebook e celular exibindo o site'
          className='w-full h-auto max-w(--breakpoint-md)'
        />
      </div>
    </section>
  );
};

export default Hero;
