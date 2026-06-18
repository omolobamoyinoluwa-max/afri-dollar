import { ImgHTMLAttributes, SyntheticEvent, useEffect, useState } from 'react';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fallbackBg?: string;
}

const getInitials = (name: string): string => {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, Math.min(parts[0].length, 2)).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export function Avatar({
  src,
  alt = '',
  name = '',
  size = 'md',
  fallbackBg,
  className = '',
  onLoad: consumerOnLoad,
  onError: consumerOnError,
  ...imgProps
}: AvatarProps): JSX.Element {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!!src);

  useEffect(() => {
    setHasError(false);
    setIsLoading(!!src);
  }, [src]);

  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg font-semibold',
    xl: 'h-16 w-16 text-xl font-semibold',
  };

  const initials = getInitials(name);
  const showFallback = !src || hasError;
  const accessibleLabel = alt || name || 'Avatar';

  // Curated premium background gradients for fallbacks based on name length
  const defaultBgGradient = () => {
    const gradients = [
      'bg-gradient-to-br from-blue-500 to-indigo-600 text-white',
      'bg-gradient-to-br from-emerald-400 to-teal-600 text-white',
      'bg-gradient-to-br from-violet-500 to-purple-600 text-white',
      'bg-gradient-to-br from-rose-500 to-pink-600 text-white',
      'bg-gradient-to-br from-amber-500 to-orange-600 text-white',
    ];
    if (!name) return gradients[0];
    const index = name.length % gradients.length;
    return gradients[index];
  };

  const bgStyle = fallbackBg || defaultBgGradient();

  const handleLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    consumerOnLoad?.(e);
    setIsLoading(false);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    consumerOnError?.(e);
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden select-none font-medium ${sizeClasses[size]} ${
        showFallback ? bgStyle : 'bg-slate-100 dark:bg-slate-800'
      } ${className}`}
      data-testid="avatar-container"
      role={showFallback ? 'img' : undefined}
      aria-label={showFallback ? accessibleLabel : undefined}
    >
      {src && !hasError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          {...imgProps}
          onLoad={handleLoad}
          onError={handleError}
          className={`h-full w-full object-cover transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {showFallback && (
        <span className="uppercase" data-testid="avatar-fallback" aria-hidden="true">
          {initials || (
            <svg
              className="h-2/3 w-2/3 text-slate-400 dark:text-slate-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </span>
      )}

      {isLoading && (
        <div
          className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse rounded-full"
          data-testid="avatar-skeleton"
        />
      )}
    </div>
  );
}
