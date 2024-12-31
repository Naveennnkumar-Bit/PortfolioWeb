import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out', // Default output directory for static files
    output: 'export', // Enable static site generation compatibility
};

export default withSentryConfig(withSentryConfig(nextConfig, {
    // Sentry Webpack Plugin Options
    silent: true, // Suppresses source map upload logs
    org: "personal-r52", // Replace with your organization slug
    project: "portfolio-website", // Replace with your project slug
}, {
    // Sentry Options for Static Export Compatibility
    widenClientFileUpload: false, // Disable since it's unnecessary for static sites
    transpileClientSDK: false,   // Disable IE11 compatibility for smaller bundle size
    hideSourceMaps: true,        // Hides source maps in the client bundle
    disableLogger: true,         // Reduces bundle size by removing Sentry logs
    automaticVercelMonitors: false, // Disable as it depends on Vercel's dynamic capabilities
}), {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "personal-r52",
    project: "portfolio-website",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
        enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
});