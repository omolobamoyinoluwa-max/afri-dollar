// Minimal placeholder state manager (Zustand replacement stub)
import { useState, useEffect } from 'react';

interface GlobalState {
  walletAddress: string | null;
  balance: number;
}

let globalState: GlobalState = {
  walletAddress: null,
  balance: 0,
};

const listeners = new Set<(state: GlobalState) => void>();

interface UseStoreResult {
  walletAddress: string | null;
  balance: number;
  setWallet: (address: string | null, balance: number) => void;
}

/**
 * Custom hook providing a minimal global state store (alternative to Zustand).
 * It manages wallet address and USDC balance with synchronized listeners.
 *
 * @returns Object containing the current store state and setWallet action
 */
export function useStore(): UseStoreResult {
  const [state, setState] = useState<GlobalState>(globalState);

  useEffect((): (() => void) => {
    const listener = (nextState: GlobalState): void => setState(nextState);
    listeners.add(listener);
    return (): void => {
      listeners.delete(listener);
    };
  }, []);

  /**
   * Updates the global wallet address and balance, and notifies all active listeners.
   *
   * @param address Stellar public key or null to clear/logout
   * @param balance Current USDC balance of the account
   */
  const setWallet = (address: string | null, balance: number): void => {
    globalState = { ...globalState, walletAddress: address, balance };
    listeners.forEach((l) => l(globalState));
  };

  return {
    ...state,
    setWallet,
  };
}
