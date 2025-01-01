import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
    distDir: 'out', // Use if exporting the app as static files
    reactStrictMode: true, // Enable React Strict Mode
    experimental: {
        // Optional: Enable experimental features (e.g., React Server Components) if necessary
    },
};

const sentryOptions = {
    silent: true, // Suppress logs during source map uploads
    org: "personal-r52", // Replace with your actual Sentry organization slug
    project: "portfolio-website", // Replace with your actual Sentry project slug
};

const sentryConfig = {
    widenClientFileUpload: false, // Skip widening source map upload paths
    transpileClientSDK: false, // Disable IE11 compatibility for smaller bundles
    hideSourceMaps: true, // Hide source maps in the client-side bundle
    disableLogger: true, // Remove Sentry logs to reduce bundle size
    automaticVercelMonitors: false, // Disable if not using Vercel's dynamic monitoring
};

// Export the configuration
export default withSentryConfig(nextConfig, sentryOptions, sentryConfig);
