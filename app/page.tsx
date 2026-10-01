import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Offerings from '@/components/offerings';

export default function Home() {
  return (
    <>
      <Header />
      <main
        id='home'
        className='h-25 w-full mx-auto bg-(--bg) flex flex-col items-center'
      >
        <Hero />
        <Offerings />
        <About />
        <Footer />
      </main>
    </>
  );
}
