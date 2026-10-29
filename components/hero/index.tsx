'use client';
import Image from 'next/image';
import { ArrowRight, CircleCheck, MessageCircle } from 'lucide-react';
import sendWhatsAppMessage from '@/utils/whatsapp';

const benefits = [
  'Design profissional e responsivo',
  'Otimizado para o Google',
  'Foco em gerar contatos e vendas',
];

const Hero = () => {
  return (
    <section className='w-full max-w-7xl flex flex-col xl:flex-row items-center justify-between gap-12 mt-40 md:mt-50 px-4'>
      <div className='w-full max-w-3xl xl:max-w-none xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left'>
        <span className='inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--bg-secondary) px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-(--text-h)'>
          <span className='h-2 w-2 rounded-full bg-(--accent)' />
          Sites, Landing Pages e Google Meu Negócio
        </span>

        <h1 className='mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-(--text-h)'>
          Transforme visitantes em{' '}
          <span className='shadow-[inset_0_-0.35em_0_var(--accent)] dark:shadow-none dark:text-(--accent)'>
            clientes
          </span>{' '}
          com um site que vende por você
        </h1>

        <p className='mt-6 text-lg text-(--text)'>
          Criamos Landing Pages, Sites Institucionais e otimizamos seu perfil no
          Google Meu Negócio para que sua empresa seja encontrada e escolhida
          por quem está procurando o seu serviço.
        </p>

        <ul className='mt-6 flex flex-col gap-2'>
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className='flex items-center gap-2 font-medium text-(--text-h)'
            >
              <CircleCheck size={20} className='shrink-0 text-(--accent)' />
              {benefit}
            </li>
          ))}
        </ul>

        <div className='mt-8 w-full flex flex-col justify-center sm:flex-row xl:justify-start gap-3'>
          <button
            type='button'
            onClick={sendWhatsAppMessage}
            className='flex items-center justify-center gap-2 px-6 py-4 whitespace-nowrap bg-(--accent) text-(--grey1) font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-(--color-secondary) hover:scale-[1.02] hover:shadow-lg'
          >
            <MessageCircle size={20} />
            Solicite um orçamento grátis
          </button>
          <a
            href='#servicos'
            className='group flex items-center justify-center gap-2 px-6 py-4 whitespace-nowrap border border-(--border) text-(--text-h) font-bold transition-all duration-300 ease-in-out hover:border-(--accent) hover:text-(--accent)'
          >
            Conheça os serviços
            <ArrowRight
              size={20}
              className='transition-transform duration-300 group-hover:translate-x-1'
            />
          </a>
        </div>

        <p className='mt-4 text-sm text-(--text)'>
          Atendimento rápido pelo WhatsApp. Sem compromisso.
        </p>
      </div>

      <div className='relative w-full xl:w-1/2 flex justify-center xl:justify-end'>
        <div
          aria-hidden
          className='absolute inset-8 rounded-full bg-(--accent) opacity-25 blur-3xl'
        />
        <Image
          src={'/responsive-mockup.webp'}
          width={731}
          height={433}
          alt='Notebook e celular exibindo um site criado pela Dourado Comunicação'
          className='relative w-full h-auto max-w-(--breakpoint-md)'
          preload
        />
      </div>
    </section>
  );
};

export default Hero;
