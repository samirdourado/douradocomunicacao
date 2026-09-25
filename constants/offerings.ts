export interface iOfferings {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export const offeringsData: iOfferings[] = [
  {
    id: 1,
    title: 'Landing Page',
    subtitle: 'Focada em conversão e geração de leads',
    description: 'Uma página estratégica projetada para transformar visitantes em clientes. Design persuasivo, navegação fluida e chamadas para ação (CTA) posicionadas para maximizar seus resultados.'
  },
  {
    id: 2,
    title: 'Site Institucional',
    subtitle: 'A estrutura completa que sua empresa merece',
    description: 'Múltiplas páginas para apresentar sua história, catálogo de serviços e diferenciais. Transmita máxima segurança ao mercado com um projeto personalizado, otimizado para o Google e pronto para crescer.'
  },
  {
    id: 3,
    title: 'Página de Vendas',
    subtitle: 'Estrutura persuasiva para vender produtos e serviços',
    description: 'Desenvolvida sob medida para lançamentos, infoprodutos ou ofertas diretas. Combina design marcante, quebra de objeções e integração com checkout para potencializar suas vendas.'
  },
  {
    id: 4,
    title: 'Otimização do Google Meu Negócio',
    subtitle: 'Seja encontrado por clientes da sua região',
    description: 'Domine as buscas locais no Google e no Google Maps. Configuramos e otimizamos seu perfil comercial para destacar sua empresa exatamente quando o cliente estiver procurando pelo seu serviço.'
  }
];