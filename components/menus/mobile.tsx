'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='md:hidden'>
      <button
        onClick={toggleMenu}
        type='button'
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        className='p-2 text-(--text-h) hover:text-(--accent) transition-colors rounded-lg focus:outline-none cursor-pointer relative z-50'
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div
          onClick={closeMenu}
          className='fixed inset-0 bg-(--bg) opacity-90 z-45'
        />
      )}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-(--bg) border-l border-(--border) p-6 z-60 
          transform transition-transform duration-300 ease-in-out flex flex-col gap-6 shadow-2xl 
          ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'} `}
      >
        <div className='flex justify-between items-center pb-4 border-b border-(--border)'>
          <button
            onClick={closeMenu}
            aria-label='Fechar menu'
            className='p-1 text-(--text) hover:text-(--accent) transition-colors cursor-pointer'
          >
            <X size={24} />
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <a
            href='#home'
            onClick={closeMenu}
            className='text-(--text-h) hover:text-(--accent) font-medium text-lg transition-colors py-2 border-b border-(--border)'
          >
            Home
          </a>
          <a
            href='#servicos'
            onClick={closeMenu}
            className='text-(--text-h) hover:text-(--accent) font-medium text-lg transition-colors py-2 border-b border-(--border)'
          >
            Serviços
          </a>
          <a
            href='#sobre'
            onClick={closeMenu}
            className='text-(--text-h) hover:text-(--accent) font-medium text-lg transition-colors py-2 border-b border-(--border)'
          >
            Sobre
          </a>
          <a
            href='#clientes'
            onClick={closeMenu}
            className='text-(--text-h) hover:text-(--accent) font-medium text-lg transition-colors py-2 border-b border-(--border)'
          >
            Clientes
          </a>
          <a
            href='#contato'
            onClick={closeMenu}
            className='text-(--text-h) hover:text-(--accent) font-medium text-lg transition-colors py-2 border-b border-(--border)'
          >
            Contato
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
