// D:\Ayman\Thrive\thrive-affiliate\src\utils\analytics.ts

/**
 * GA4 Event Tracking Utilities
 * All analytics events are tracked here
 * Import these functions into components to track user actions
 */

// Declare gtag (from Google Analytics script in HTML head)
declare let gtag: Function;

/**
 * Track supplement link clicks
 * @param supplementName - Name of the supplement clicked
 * @example trackSupplementClick('Berberine')
 */
export const trackSupplementClick = (supplementName: string) => {
  gtag('event', 'supplement_click', {
    supplement_name: supplementName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track email signups
 * @param source - Where the signup came from
 * @example trackEmailSignup('homepage')
 */
export const trackEmailSignup = (source: string) => {
  gtag('event', 'email_signup', {
    signup_source: source, // 'lead_magnet', 'blog', 'homepage', 'floating'
  });
};

/**
 * Track page scroll depth
 * Tracks when user scrolls to 25%, 50%, 75% of page
 * @param page - Page name/URL
 * @example trackScrollDepth('blood-sugar-support')
 */
export const trackScrollDepth = (page: string) => {
  let previousScrollPercentage = 0;

  window.addEventListener('scroll', () => {
    const scrollPercentage = (
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    if (scrollPercentage >= 25 && previousScrollPercentage < 25) {
      gtag('event', 'scroll_25_percent', { page });
    }
    if (scrollPercentage >= 50 && previousScrollPercentage < 50) {
      gtag('event', 'scroll_50_percent', { page });
    }
    if (scrollPercentage >= 75 && previousScrollPercentage < 75) {
      gtag('event', 'scroll_75_percent', { page });
    }

    previousScrollPercentage = scrollPercentage;
  });
};

/**
 * Track time spent on page
 * Fires when user leaves the page
 * @param page - Page name/URL
 * @example trackTimeOnPage('supplements')
 */
export const trackTimeOnPage = (page: string) => {
  let startTime = Date.now();

  window.addEventListener('beforeunload', () => {
    const timeOnPage = Date.now() - startTime;
    gtag('event', 'time_on_page', {
      page,
      seconds: Math.round(timeOnPage / 1000),
    });
  });
};

/**
 * Track form submissions
 * @param formName - Name of form submitted
 * @example trackFormSubmit('contact-form')
 */
export const trackFormSubmit = (formName: string) => {
  gtag('event', 'form_submit', {
    form_name: formName,
  });
};

/**
 * Track video plays (if you add videos)
 * @param videoTitle - Title of video
 * @example trackVideoPlay('7-Day Reset Demo')
 */
export const trackVideoPlay = (videoTitle: string) => {
  gtag('event', 'video_play', {
    video_title: videoTitle,
  });
};

/**
 * Track internal link clicks
 * @param linkText - Text of the link
 * @param destination - Where the link goes
 * @example trackInternalLink('Learn More', '/prediabetes-support')
 */
export const trackInternalLink = (linkText: string, destination: string) => {
  gtag('event', 'internal_link_click', {
    link_text: linkText,
    destination,
  });
};

/**
 * Track CTA button clicks
 * @param buttonText - Text on the button
 * @param buttonLocation - Where on page (hero, middle, bottom)
 * @example trackCTAClick('Get Supplements', 'hero')
 */
export const trackCTAClick = (buttonText: string, buttonLocation: string) => {
  gtag('event', 'cta_click', {
    button_text: buttonText,
    button_location: buttonLocation,
  });
};