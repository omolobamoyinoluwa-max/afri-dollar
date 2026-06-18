import React, { useState } from 'react';

import { useFX } from '../../hooks/useFX';

/**
 * FXCalculator component allows users to input USD amounts and see the conversion
 * to NGN in real-time based on the custom hook `useFX` rates.
 */
export function FXCalculator(): JSX.Element {
  const [usdAmount, setUsdAmount] = useState<number>(1);
  const { rates, convert } = useFX();
  const rate = rates.USD_NGN;

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-800">FX Calculator</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="usd">USD Amount</label>
        <input
          id="usd"
          type="number"
          min={0}
          step="0.01"
          value={usdAmount}
          onChange={(e) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            const next = e.currentTarget.valueAsNumber;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setUsdAmount(Number.isFinite(next) && next >= 0 ? next : 0);
          }}
          className="p-2 border rounded"
        />
      </div>
      <div className="text-sm text-gray-600">
        Exchange Rate: <span className="font-semibold">1 USD = {rate} NGN</span>
      </div>
      <div className="p-3 bg-gray-50 rounded">
        <p className="text-xs text-gray-500">Estimated Nigerian Naira</p>
        <p className="text-xl font-bold text-gray-800">
          {convert(usdAmount, 'USD_NGN').toLocaleString()} NGN
        </p>
      </div>
    </div>
  );
}
