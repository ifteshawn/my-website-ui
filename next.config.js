/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'websiteiftestorage.blob.core.windows.net'
            }
        ]
    },
}

module.exports = nextConfig
