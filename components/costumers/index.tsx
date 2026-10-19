import { costumersData } from '@/constants/costumers';
import Image from 'next/image';
import Link from 'next/link';

const Customers = () => {
  return (
    <section
      id='clientes'
      className='flex flex-col items-center bg-(--bg) w-full px-4 pt-20 pb-20'
    >
      <div className='w-full max-w-7xl flex flex-col items-center gap-8'>
        <h3 className='text-3xl md:text-4xl font-bold text-(--text)'>
          Clientes e Parceiros
        </h3>
        <section className='flex gap-8 lg:flex-row justify-between'>
          {costumersData.map((costumer) => (
            <Link
              key={costumer.id}
              href={costumer.page_url}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded bg-(--grey3) transition-all duration-300 ease-in-out hover:scale-[1.10] hover:shadow-lg'
            >
              <Image
                src={costumer.image_url}
                width={150}
                height={150}
                alt={costumer.name}
              />
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Customers;
