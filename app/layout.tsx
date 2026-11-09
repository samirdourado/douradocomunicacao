import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from '@/components/toastcontainer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const siteUrl = 'https://www.douradocomunicacao.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dourado Comunicação | Criação de sites e presença digital',
  description:
    'Desenvolvimento de Landing Pages de alta conversão, sites institucionais e otimização do Google Meu Negócio.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dourado Comunicação',
    title: 'Dourado Comunicação | Criação de sites e presença digital',
    description:
      'Desenvolvimento de Landing Pages de alta conversão, sites institucionais e otimização do Google Meu Negócio.',
    images: [
      {
        url: '/dourado_comunicacao_1_1.jpg',
        width: 1080,
        height: 1080,
        alt: 'Área de trabalho Dourado Comunicação',
      },
    ],
  },
  robots:
    process.env.VERCEL_ENV === 'production'
      ? undefined
      : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='pt-BR' className={`${inter.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        {children}
        <ToastProvider />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Dourado Comunicação',
              url: 'https://www.douradocomunicacao.com.br',
              image:
                'https://www.douradocomunicacao.com.br/dourado_comunicacao_1_1.jpg',
              telephone: '+55 11 96827-6100',
              email: 'contato@douradocomunicacao.com.br',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Antônio Foster, 563',
                addressLocality: 'São Paulo',
                addressRegion: 'SP',
                postalCode: '04760-040',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://www.instagram.com/_douradocomunicacao/',
                'https://www.facebook.com/douradocomunicacao',
                'https://share.google/NLgY0oebGvhNo5cDf',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
