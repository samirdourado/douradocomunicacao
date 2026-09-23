import Header from '@/components/header';

export default function Home() {
  return (
    <>
    <Header/>
    <div className='h-25 w-full max-w-5xl mx-auto bg-(--bg) flex flex-col items-center px-3.75 md:px-12.5 xl:px-1'>
      <section className='w-full flex flex-col mt-30'>
        <h1 className='text-4xl font-bold text-(--text-h)'>
          Bem-vindo à Dourado Comunicação
        </h1>
        <p className='mt-4 text-(--text)'>
          Criação de Landing Pages, Sites Institucionais e Otimização de Perfil no Google Meu Negócio.
        </p>
      </section>
    </div>
    </>
  );
}
