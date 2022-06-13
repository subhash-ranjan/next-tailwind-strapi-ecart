/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost:3000', 'yourDomainName.com'],
    },
};

module.exports = nextConfig;
