export interface StellarAccount {
  publicKey: string;
  balances: Array<{
    asset_type: string;
    balance: string;
    asset_code?: string;
  }>;
}

/**
 * Loads a Stellar account from Horizon by public key.
 *
 * @param publicKey Stellar account public key address string
 * @returns Promise resolving to the StellarAccount object with balances array
 */
export const loadStellarAccount = async (publicKey: string): Promise<StellarAccount> => {
  const horizonUrl =
    process.env.NEXT_PUBLIC_STELLAR_HORIZON_URL || 'https://horizon-testnet.stellar.org';
  const response = await fetch(`${horizonUrl}/accounts/${publicKey}`);
  if (!response.ok) {
    throw new Error('Failed to load Stellar account');
  }
  const data = (await response.json()) as { balances?: StellarAccount['balances'] };
  return {
    publicKey,
    balances: data.balances ?? [],
  };
};
