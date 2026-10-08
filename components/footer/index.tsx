import Link from 'next/link';
import TypcnArrowUpThick from '../icons/top';

const Footer = () => {
  const actYear: number = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center bg-(--color-secondary) w-full px-4 pt-18 pb-18 md:pt-30 md:pb-30 lg:pb-8 text-(--grey0)'>
      <div className='w-full max-w-7xl flex flex-wrap justify-between gap-y-8 mb-12'>
        <div className='w-[calc(50%-1rem)] md:w-auto flex flex-col gap-4 text-left'>
          <h6 className='font-bold text-base sm:text-lg uppercase tracking-wider mb-2 text-(--grey0)'>
            LINKS IMPORTANTES
          </h6>
          <Link
            href='https://app.turbocloud.com.br/aff.php?aff=1568'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Contratar hospedagem
          </Link>
          <Link
            href='https://registro.br/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Contratar domínio
          </Link>
          <Link
            href='https://wa.me/5511968276100'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Perfil de empresa
          </Link>
          <Link
            href='https://wa.me/5511968276100'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Criação de sites
          </Link>
          <Link
            href='https://wa.me/5511968276100'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Material impresso
          </Link>
        </div>
        <div className='w-[calc(50%-1rem)] md:w-auto flex flex-col gap-4 text-left'>
          <h6 className='font-bold text-base sm:text-lg uppercase tracking-wider mb-2 text-(--grey0)'>
            NAVEGAÇÃO
          </h6>
          <Link
            href='#home'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Home
          </Link>
          <Link
            href='#servicos'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Serviços
          </Link>
          <Link
            href='#sobre'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Sobre
          </Link>
          <Link
            href='#clientes'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Clientes
          </Link>
          <Link
            href='#contato'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Contato
          </Link>
        </div>
        <div className='w-[calc(50%-1rem)] md:w-auto flex flex-col gap-4 text-left'>
          <h6 className='font-bold text-base sm:text-lg uppercase tracking-wider mb-2 text-(--grey0)'>
            REDES SOCIAIS
          </h6>
          <Link
            href={'https://www.instagram.com/_douradocomunicacao/'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Instagram
          </Link>
          <Link
            href={'https://www.facebook.com/douradocomunicacao'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Facebook
          </Link>
          <Link
            href={'https://share.google/NLgY0oebGvhNo5cDf'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            Google
          </Link>
          <Link
            href={'https://wa.me/5511968276100'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            WhatsApp
          </Link>
        </div>
        <div className='w-[calc(50%-1rem)] md:w-auto flex flex-col gap-4 text-left'>
          <h6 className='font-bold text-base sm:text-lg uppercase tracking-wider mb-2 text-(--grey0)'>
            CONTATO
          </h6>
          <Link
            href='mailto:contato@douradocomunicacao.com.br'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            contato@dourado.com.br
          </Link>
          <Link
            href='https://wa.me/5511968276100'
            target='_blank'
            rel='noopener noreferrer'
            className='text-(--grey0) hover:underline hover:opacity-80 transition-all text-sm sm:text-base'
          >
            (11) 96827-6100
          </Link>
          <p className='text-(--grey0) hover:opacity-80 transition-all text-sm sm:text-base'>
            São Paulo, SP
          </p>
          <p className='text-(--grey0) hover:opacity-80 transition-all text-sm sm:text-base'>
            Seg - Sex: 08h às 18h
          </p>
        </div>
      </div>
      <hr className='w-full max-w-7xl border-t border-(--grey0)/20 mb-6' />
      <div className='w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-80 text-(--grey0)'>
        <p className='text-(--grey0) text-center sm:text-left'>
          {actYear && typeof actYear == 'number' && !isNaN(actYear)
            ? `© ${actYear} Dourado Comunicação. Todos os direitos reservados.`
            : 'Dourado Comunicação. Todos os direitos reservados.'}
        </p>
        <Link
          href='#home'
          className='flex items-center gap-1 font-semibold text-(--grey0) p-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-(--color-primary) hover:rounded hover:scale-[1.02] hover:shadow-lg'
        >
          Topo <TypcnArrowUpThick />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
