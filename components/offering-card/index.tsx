import { iOfferings } from '@/constants/offerings';

const OfferingCard = (offering: iOfferings) => {
  return (
    <div className='group relative w-full rounded-2xl bg-(--bg) p-4 transition-all duration-300 hover:-translate-y-2'>
      <div
        className='absolute inset-1 -z-10 rounded-2xl bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 
        opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30'
      />
      <div
        className='absolute inset-0 rounded-2xl p-0.5 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600
       opacity-80 group-hover:opacity-100'
      />
      <div className='relative h-full w-full rounded-[14px] bg-(--bg) p-4'>
        <span className='text-xs font-bold text-(--accent) uppercase tracking-wider'>
          {offering.title}
        </span>
        <h3 className='mt-2 text-xl font-bold text-(--text-h)'>
          {offering.subtitle}
        </h3>
        <p className='mt-2 text-sm text-zinc-400'>{offering.description}</p>
      </div>
    </div>
  );
};

export default OfferingCard;
