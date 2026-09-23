const DesktopMenu = () => {
  return (
    <nav className='hidden md:flex items-center gap-8'>
      <a
        href='#home'
        className='text-(--text-h) hover:text-(--accent) font-medium text-base transition-colors duration-200'
      >
        Home
      </a>
      <a
        href='#servicos'
        className='text-(--text-h) hover:text-(--accent) font-medium text-base transition-colors duration-200'
      >
        Serviços
      </a>
      <a
        href='#sobre'
        className='text-(--text-h) hover:text-(--accent) font-medium text-base transition-colors duration-200'
      >
        Sobre
      </a>
      <a
        href='#clientes'
        className='text-(--text-h) hover:text-(--accent) font-medium text-base transition-colors duration-200'
      >
        Clientes
      </a>
      <a
        href='#contato'
        className='text-(--text-h) hover:text-(--accent) font-medium text-base transition-colors duration-200'
      >
        Contato
      </a>
    </nav>
  );
};

export default DesktopMenu;