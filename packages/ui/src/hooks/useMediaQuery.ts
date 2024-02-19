import {useCallback, useSyncExternalStore} from "react";

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
