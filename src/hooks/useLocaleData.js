import { useMemo } from 'react';

function pickLocalizedValue(value, language) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    if ('en' in value || 'pt' in value) {
      return value[language] ?? value.en ?? value.pt;
    }
  }

  if (Array.isArray(value)) {
    return value.map((item) => pickLocalizedValue(item, language));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, pickLocalizedValue(item, language)]));
  }

  return value;
}

export function useLocaleData(data, language) {
  return useMemo(() => pickLocalizedValue(data, language), [data, language]);
}
