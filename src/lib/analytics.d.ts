declare global {
    interface Window {
        __PLAUSIBLE_DOMAIN?: string;
        __VERCEL_SCRIPT_SRC?: string;
    }
}
type AnalyticsConfig = {
    provider?: 'plausible' | 'vercel';
    domain?: string;
    vercelScriptSrc?: string;
};
export declare function initAnalytics(config?: AnalyticsConfig): void;
export {};
