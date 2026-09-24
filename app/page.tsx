import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <Header />
      <main
        id='home'
        className='h-25 w-full max-w-5xl mx-auto bg-(--bg) flex flex-col items-center px-3.75 md:px-12.5 xl:px-1'
      >
        <Hero />
      </main>
    </>
  );
}
