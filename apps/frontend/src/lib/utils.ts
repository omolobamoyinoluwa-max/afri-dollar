export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatAddress(address: string): string {
  if (address.length <= 8) return address;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}
