import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.fcgh13-1.fna.fbcdn.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'scontent.fcgh13-1.fna.fbcdn.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'makelab.ind.br',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
