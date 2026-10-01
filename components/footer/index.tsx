const Footer = () => {
  return (
    <footer
      id='contato'
      className='flex flex-col items-center bg-(--bg) w-full px-4 pt-20 pb-20 lg:pb-0 mb-12'
    >
      <div className='w-full max-w-7xl flex flex-col items-center lg:flex-row lg:justify-between gap-8'>
        <section className='w-full h-full lg:w-1/2 lg:text-left flex flex-col gap-7 lg:gap-5 lg:justify-between'>
          <h3 className='text-3xl md:text-4xl font-bold text-(--text) text-center'>
            Entre em contato
          </h3>
          <form className='w-full flex flex-col gap-2'>
            <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
              <label className='w-full text-lg' htmlFor='name'>
                Nome:
              </label>
              <input
                className='w-full pl-0.5 h-9 bg-(--code-bg)'
                id='name'
                type='text'
                placeholder='Digite seu nome.'
              />
            </fieldset>
            <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
              <label className='w-full text-lg' htmlFor='email'>
                E-mail
              </label>
              <input
                className='w-full pl-0.5 h-9 bg-(--code-bg)'
                id='email'
                type='email'
                placeholder='Digite seu e-mail.'
              />
            </fieldset>
            <fieldset className='w-full mx-auto flex flex-col items-start gap-0.5'>
              <label className='w-full text-lg' htmlFor='message'>
                Mensagem
              </label>
              <textarea
                className='w-full h-32 p-0.5 bg-(--code-bg) resize-y'
                id='message'
                placeholder='Digite sua mensagem.'
              />
            </fieldset>
            <button
              type='submit'
              className='w-full p-4 bg-(--accent) text-(--grey1) text-center font-bold cursor-pointer lg:mb-14 transition-all duration-300 ease-in-out hover:bg-(--color-secondary) hover:scale-[1.02] hover:shadow-lg'
            >
              Enviar
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
