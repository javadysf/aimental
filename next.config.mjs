/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_BASE_URL: "https://aimental.hsg-stage.ir",
    },
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'aimental.hsg-stage.ir',
        },
        {
          protocol: 'http',
          hostname: 'aimental.hsg-stage.ir',
        },
      ]
      },
      reactStrictMode: false,
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },

};

export default nextConfig;
