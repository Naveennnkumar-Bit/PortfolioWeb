import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensure this is set for static site generation
};

export default withSentryConfig(nextConfig, {
    // Sentry Webpack Plugin Options
    silent: true, // Suppresses source map upload logs
    org: "javascript-mastery", // Replace with your organization slug
    project: "javascript-nextjs", // Replace with your project slug
}, {
    // Sentry Options for Static Export Compatibility
    widenClientFileUpload: false, // Disable since it's unnecessary for static sites
    transpileClientSDK: false,   // Disable IE11 compatibility for smaller bundle size
    hideSourceMaps: true,        // Hides source maps in the client bundle
    disableLogger: true,         // Reduces bundle size by removing Sentry logs
    automaticVercelMonitors: false, // Disable as it depends on Vercel's dynamic capabilities
});
