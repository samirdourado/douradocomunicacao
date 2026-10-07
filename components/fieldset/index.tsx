import iFieldset from '@/interfaces/fieldsets.interface';

const Fieldset = ({
  id,
  label,
  type,
  placeholder,
  register,
  error,
}: iFieldset) => {
  return (
    <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
      <label className='w-full text-lg' htmlFor={id}>
        {label}
      </label>
      <input
        className='w-full pl-0.5 h-9 bg-(--bg-third)'
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <p className={'text-red-500 text-xs font-semibold'}>{error.message}</p>
      )}
    </fieldset>
  );
};

export default Fieldset;
