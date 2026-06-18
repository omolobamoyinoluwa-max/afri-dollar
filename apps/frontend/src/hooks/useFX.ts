import { useState } from 'react';

interface UseFXResult {
  rates: Record<string, number>;
  convert: (amount: number, pair: 'USD_NGN' | 'USD_KES' | 'USD_GHS') => number;
  loading: boolean;
}

export function useFX(): UseFXResult {
  const [rates] = useState<Record<string, number>>({
    USD_NGN: 1500,
    USD_KES: 130,
    USD_GHS: 14,
  });

  const convert = (amount: number, pair: 'USD_NGN' | 'USD_KES' | 'USD_GHS'): number => {
    const rate = rates[pair] || 1;
    return amount * rate;
  };

  return {
    rates,
    convert,
    loading: false,
  };
}
