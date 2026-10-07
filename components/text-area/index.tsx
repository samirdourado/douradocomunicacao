import iFieldset from '@/interfaces/fieldsets.interface';

const TextArea = ({ id, label, placeholder, register, error }: iFieldset) => {
  return (
    <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
      <label className='w-full text-lg' htmlFor={id}>
        {label}
      </label>
      <textarea
        className='w-full h-32 p-0.5 bg-(--bg-third) resize-y'
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <p className={'text-red-500 text-xs font-semibold'}>{error.message}</p>
      )}
    </fieldset>
  );
};

export default TextArea;
