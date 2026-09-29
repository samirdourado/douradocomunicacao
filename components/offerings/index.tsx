import { offeringsData } from '@/constants/offerings';
import OfferingCard from '../offering-card';

const Offerings = () => {
  return (
    <div id='servicos' className='pb-12 mt-30 px-4'>
      <section className='w-full max-w-7xl flex flex-col items-center gap-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-(--text-h)'>
          Entre os nossos serviços
        </h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          {offeringsData.map((offering) => (
            <OfferingCard key={offering.id} {...offering} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offerings;
