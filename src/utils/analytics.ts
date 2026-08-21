// src/utils/analytics.ts
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Centralized Google Analytics tracking utility
 * Handles events, pageviews, and custom tracking
 */
interface GtagEvent {
  event: string;
  [key: string]: string | number | boolean;
}

class AnalyticsTracker {
  private initialized: boolean = false;

  /**
   * Initialize analytics (called once on app load)
   */
  init(): void {
    if (this.initialized) return;

    const gaId = import.meta.env.VITE_GA_ID;
    if (!gaId) {
      console.warn('Google Analytics ID not configured');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', gaId);

    this.initialized = true;
  }

  /**
   * Track a custom event
   * @param eventName - Name of the event (e.g., 'lead_magnet_download')
   * @param data - Event data object
   */
  trackEvent(eventName: string, data: Record<string, string | number | boolean> = {}): void {
    if (!this.isReady()) return;

    window.gtag!('event', eventName, data);
    console.log(`[Analytics] Event tracked: ${eventName}`, data);
  }

  /**
   * Track page view
   * @param pageName - Human-readable page name
   * @param path - Page path (optional, auto-detected)
   */
  trackPageView(pageName: string, path?: string): void {
    if (!this.isReady()) return;

    const currentPath = path || window.location.pathname;
    window.gtag!('event', 'page_view', {
      page_title: pageName,
      page_path: currentPath,
    });

    console.log(`[Analytics] Page view: ${pageName}`);
  }

  /**
   * Track form submission
   * @param formName - Name of the form
   * @param success - Whether submission was successful
   */
  trackFormSubmission(formName: string, success: boolean = true): void {
    this.trackEvent('form_submission', {
      form_name: formName,
      success: success,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Track lead magnet download
   * @param source - Where the lead came from (e.g., 'berberine-article')
   * @param emailDomain - Email domain (privacy-safe, not full email)
   */
  trackLeadMagnet(source: string, emailDomain: string = ''): void {
    this.trackEvent('lead_magnet_download', {
      source: source,
      email_domain: emailDomain,
    });
  }

  /**
   * Track affiliate link click
   * @param productName - Name of the product
   * @param affiliate - Affiliate platform (e.g., 'digistore24')
   */
  trackAffiliateClick(productName: string, affiliate: string = 'digistore24'): void {
    this.trackEvent('affiliate_click', {
      product_name: productName,
      affiliate_platform: affiliate,
    });
  }

  /**
   * Track user engagement (scroll depth, time on page, etc.)
   * @param engagementType - Type of engagement
   * @param value - Engagement value
   */
  trackEngagement(engagementType: string, value: number | string): void {
    this.trackEvent('engagement', {
      engagement_type: engagementType,
      value: value,
    });
  }

  /**
   * Track conversion (purchase, signup, etc.)
   * @param conversionType - Type of conversion
   * @param value - Monetary value (optional)
   * @param currency - Currency code (optional)
   */
  trackConversion(
    conversionType: string,
    value?: number,
    currency?: string
  ): void {
    const data: Record<string, any> = {
      conversion_type: conversionType,
    };

    if (value) data.value = value;
    if (currency) data.currency = currency;

    this.trackEvent('conversion', data);
  }

  /**
   * Check if analytics is ready
   */
  private isReady(): boolean {
    if (!import.meta.env.VITE_GA_ID) {
      return false;
    }

    if (typeof window === 'undefined') {
      return false;
    }

    return !!window.gtag;
  }
}

// Export singleton instance
export const analytics = new AnalyticsTracker();

// Initialize on import
if (typeof window !== 'undefined') {
  analytics.init();
}

export default analytics;