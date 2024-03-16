import { URL } from 'url';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (!GA_TRACKING_ID) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

/* interface GTagEvent {
  action: string;
  parameters?: 'ControlParams | EventParams | CustomParams | undefined';
} */

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, parameters }: any) => {
  window.gtag('event', action, parameters);
};
