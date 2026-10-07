'use client';
import { House, Phone, Mail } from 'lucide-react';
import { LineMdFacebook } from '../icons/facebook';
import Link from 'next/link';
import LineMdInstagram from '../icons/instagram';
import MdiGoogleMyBusiness from '../icons/merchant';
import Fieldset from '../fieldset';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import sendEmailSchema from '@/schemas/sendEmailSchema';
import sendEmail from '@/services/sendEmail.service';
import formatPhone from '@/utils/formatPhone';
import TextArea from '../text-area';
import MaterialSymbolsSend from '../icons/send';
import MaterialSymbolsScheduleSendRounded from '../icons/sending';

const Contact = () => {
  const [submiting, setSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(sendEmailSchema),
  });

  const submit = async (formData: any) => {
    try {
      setSubmiting(true);
      await sendEmail(formData);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <footer
      id='contato'
      className='flex flex-col items-center bg-(--bg) w-full px-4 pt-20 pb-20 lg:pb-0 mb-12'
    >
      <div className='w-full max-w-7xl flex flex-col items-center gap-8'>
        <h3 className='text-3xl md:text-4xl font-bold text-(--text)'>
          Entre em contato
        </h3>
        <section className='w-full lg:text-left flex flex-col gap-6 lg:flex-row justify-between'>
          <form
            noValidate
            onSubmit={handleSubmit(submit)}
            className='w-full flex flex-col gap-2 lg:w-1/2 '
          >
            <Fieldset
              id='name'
              type='text'
              label='Nome:'
              placeholder='Digite seu nome.'
              error={errors.name}
              register={register('name')}
            />
            <Fieldset
              id='phone'
              type='tel'
              label='Telefone:'
              placeholder='Digite seu telefone.'
              error={errors.phone}
              register={register('phone', {
                onChange: (event) => {
                  const masked = formatPhone(event.target.value);
                  event.target.value = masked;
                  setValue('phone', masked, { shouldValidate: true });
                },
              })}
            />
            <Fieldset
              id='email'
              type='email'
              label='E-mail:'
              placeholder='Digite seu e-mail.'
              error={errors.email}
              register={register('email')}
            />
            <TextArea
              id='text'
              label='Mensagem:'
              placeholder='Escreva sua mensagem.'
              error={errors.text}
              register={register('text')}
            />
            <button
              type='submit'
              disabled={submiting}
              className='w-full p-3 bg-(--color-secondary) text-(--grey0) text-center font-bold cursor-pointer lg:mb-14 transition-all duration-300 ease-in-out flex justify-center items-center gap-1 hover:bg-(--accent) hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-(--color-secondary) disabled:hover:shadow-none'
            >
              {submiting ? (
                <>
                  <MaterialSymbolsScheduleSendRounded />
                  Enviando...
                </>
              ) : (
                <>
                  <MaterialSymbolsSend /> Enviar
                </>
              )}
            </button>
          </form>
          <section className='text-left flex flex-col gap-6'>
            <p className='flex gap-2 items-center font-bold'>
              <House
                size={28}
                className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]'
              />{' '}
              São Paulo, SP
            </p>
            <p className='flex gap-2 items-center font-bold'>
              <Phone
                size={28}
                className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]'
              />{' '}
              11 96827-6100
            </p>
            <p className='flex gap-2 items-center font-bold'>
              <Mail
                size={28}
                className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]'
              />{' '}
              contato@douradocomunicacao.com.br
            </p>
            <div className='flex gap-2'>
              <Link
                href={'https://www.instagram.com/_douradocomunicacao/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LineMdInstagram className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]' />
              </Link>
              <Link
                href={'https://www.facebook.com/douradocomunicacao'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LineMdFacebook className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]' />
              </Link>
              <Link
                href={'https://share.google/NLgY0oebGvhNo5cDf'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MdiGoogleMyBusiness className='transition-all duration-300 ease-in-out hover:text-(--color-primary) hover:scale-[1.1]' />
              </Link>
            </div>
            <h6>Desenvolvimento Web | Comunicação Visual</h6>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Contact;
