export interface iCustomers {
  id: number;
  name: string;
  image_url: string;
  page_url: string;
}

export const costumersData: iCustomers[] = [
  {
    id: 1,
    name: 'Head Box Loja',
    image_url:'/headbox.jpg',
    page_url: 'https://www.instagram.com/headboxloja/',
  },
  {
    id: 2,
    name: 'Estética sem Filtro',
    image_url: '/esteticasemfiltro.jpg',
    page_url: 'https://www.facebook.com/silmara.dourados',
  },
  {
    id: 3,
    name: 'Make Lab',
    image_url:
      'https://makelab.ind.br/wp-content/uploads/2026/02/cropped-logoLOW.jpg',
    page_url: 'https://makelab.ind.br/',
  },
];
