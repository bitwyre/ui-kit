import {useCallback, useSyncExternalStore} from "react";

/**
 * useMediaQuery hooks tells the app if a CSS media query matches with the current state
 * Common use case is to tell the app if the current device is a mobile device or desktop device
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *  const isMobile = useMediaQuery('only screen and (max-width: 650px)')
 *
 *  if(isMobile) return // mobile component
 *
 *  return // desktop component
 * }
 * ```
 *
 * @param query the media query you want to watch
 * @returns boolean
 */
export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (listener: () => void) => {
      window.matchMedia(query).addEventListener("change", listener);

      return () => window.matchMedia(query).removeEventListener("change", listener);
    },
    [query],
  );

  const getSnapshot = () => window.matchMedia(query).matches;

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
