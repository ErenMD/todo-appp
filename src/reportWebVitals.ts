import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS((metric) => onPerfEntry(metric));
    onFID((metric) => onPerfEntry(metric));
    onFCP((metric) => onPerfEntry(metric));
    onLCP((metric) => onPerfEntry(metric));
    onTTFB((metric) => onPerfEntry(metric));
  }
};

export default reportWebVitals;
