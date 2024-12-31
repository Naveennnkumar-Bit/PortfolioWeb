import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out', // Default output directory for static files
    output: 'export', // Enable static site generation compatibility
};

const sentryOptions = {
    // Sentry Webpack Plugin Options
    silent: true, // Suppresses source map upload logs
    org: "personal-r52", // Replace with your organization slug
    project: "portfolio-website", // Replace with your project slug
};

const sentryConfig = {
    // Sentry Options for Static Export Compatibility
    widenClientFileUpload: false, // Disable since it's unnecessary for static sites
    transpileClientSDK: false,   // Disable IE11 compatibility for smaller bundle size
    hideSourceMaps: true,        // Hides source maps in the client bundle
    disableLogger: true,         // Reduces bundle size by removing Sentry logs
    automaticVercelMonitors: false, // Disable as it depends on Vercel's dynamic capabilities
};

export default withSentryConfig(nextConfig, sentryOptions, sentryConfig);
