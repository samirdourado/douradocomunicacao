import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.douradocomunicacao.com.br/sitemap.xml',
  };
};

export default robots;
