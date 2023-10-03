/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next advises that strict mode be on (true)
    // StrictMode detects problems in development
    // but also causes components to render twice 
    // in prod. components don't render twice
    reactStrictMode: false
}

module.exports = nextConfig
