import bandlAnalizer from '@next/bundle-analyzer'
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mui/icons-material'],
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/productImg/**",
      },
    ],
  },
  

};
const withBundleAnalyzer = bandlAnalizer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig);
