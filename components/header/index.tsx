import DesktopMenu from '@/components/menus/desktop';
import MobileMenu from '@/components/menus/mobile';
import Image from 'next/image';

const Header = () => {
    return (
      <div className='flex flex-col items-center bg-(--bg) w-full h-25 fixed top-0 left-0 right-0 mx-auto z-50 shadow-sm'>
        <header className='flex items-center justify-between bg-(--bg) w-full h-25 max-w-5xl px-3.75 md:px-12.5 xl:px-0'>
          <figure className='flex items-center'>
            <Image
              src={'/logo-light.webp'}
              width={180}
              height={50}
              alt='Logo Dourado Comunicação'
              className='block dark:hidden'
              priority
            />
            <Image
              src='/logo-dark.webp'
              alt='Dourado Comunicação'
              width={180}
              height={50}
              className='hidden dark:block'
              priority
            />
          </figure>
          <MobileMenu/>
          <DesktopMenu/>
      </header>
    </div>
  );
};

export default Header;