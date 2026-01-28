/**
 * Google Analytics utility functions
 */

declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
		dataLayer?: any[];
	}
}

export const GA_MEASUREMENT_ID = 'G-V418YHEP1W';

/**
 * Check if debug mode is enabled
 * Enabled if:
 * - Running on localhost
 * - URL has ?debug_analytics=true parameter
 */
export function isDebugMode(): boolean {
	if (typeof window === 'undefined') return false;
	
	const isLocalhost = window.location.hostname === 'localhost' || 
	                    window.location.hostname === '127.0.0.1';
	const hasDebugParam = new URLSearchParams(window.location.search).get('debug_analytics') === 'true';
	
	return isLocalhost || hasDebugParam;
}

/**
 * Initialize gtag with consent mode
 */
export function initGtag() {
	if (typeof window === 'undefined') return;

	const debugMode = isDebugMode();
	
	if (debugMode) {
		console.log('🔍 Google Analytics Debug Mode Enabled');
	}

	// Initialize dataLayer
	window.dataLayer = window.dataLayer || [];
	window.gtag = function() {
		window.dataLayer?.push(arguments);
	};

	// Set default consent mode (denied until user accepts)
	window.gtag('consent', 'default', {
		'analytics_storage': 'denied',
		'ad_storage': 'denied',
		'wait_for_update': 500
	});

	// Initialize gtag
	window.gtag('js', new Date());
	window.gtag('config', GA_MEASUREMENT_ID, {
		'anonymize_ip': true,
		'cookie_flags': 'SameSite=None;Secure',
		'debug_mode': debugMode
	});
	
	if (debugMode) {
		console.log('✅ Google Analytics initialized:', GA_MEASUREMENT_ID);
	}
}

/**
 * Update consent when user accepts cookies
 */
export function grantConsent() {
	if (typeof window === 'undefined' || !window.gtag) return;

	window.gtag('consent', 'update', {
		'analytics_storage': 'granted',
		'ad_storage': 'granted'
	});
	
	if (isDebugMode()) {
		console.log('✅ Analytics consent granted');
	}
}

/**
 * Track page view
 */
export function trackPageView(url: string) {
	if (typeof window === 'undefined' || !window.gtag) return;
	
	if (isDebugMode()) {
		console.log('📄 Page view tracked:', url);
	}

	window.gtag('config', GA_MEASUREMENT_ID, {
		'page_path': url
	});
}

/**
 * Track custom event
 * @param action - The event action (e.g., 'click', 'download')
 * @param category - The event category (e.g., 'button', 'link')
 * @param label - Optional event label
 * @param value - Optional numeric value
 */
export function trackEvent(
	action: string,
	category: string,
	label?: string,
	value?: number
) {
	if (typeof window === 'undefined' || !window.gtag) return;

	window.gtag('event', action, {
			'event_category': category,
		'event_label': label,
		'value': value
	});
       
}

/**
 * Check if user has granted analytics consent
 */
export function hasAnalyticsConsent(): boolean {
	if (typeof window === 'undefined') return false;
	
	// Check if hu-manity consent cookie exists and is accepted
	const cookies = document.cookie.split(';');
	const consentCookie = cookies.find(c => c.trim().startsWith('hu_consent='));
	
	if (consentCookie) {
		const value = consentCookie.split('=')[1];
		try {
			const consent = JSON.parse(decodeURIComponent(value));
			return consent.analytics === true;
		} catch {
			return false;
		}
	}
	
	return false;
}

/**
 * Listen for consent changes from hu-manity banner
 */
export function listenForConsent(callback: (granted: boolean) => void) {
	if (typeof window === 'undefined') return;

	// Listen for hu-manity consent events
	window.addEventListener('hu_consent_updated', ((event: CustomEvent) => {
		const granted = event.detail?.analytics === true;
		callback(granted);
		
		if (granted) {
			grantConsent();
		}
	}) as EventListener);

	// Check initial consent state
	if (hasAnalyticsConsent()) {
		callback(true);
		grantConsent();
	}
}
