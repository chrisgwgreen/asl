import { useState, useEffect } from "react";
import { TABLET_BREAKPOINT, mediaQuery } from "../utils";

/*
 * Hook
 */
export const useIsTabletViewport = () => {
  const [isTabletViewport, setIsTabletViewport] = useState(false);

  useEffect(() => {
    const matchMediaQuery = window.matchMedia(mediaQuery(TABLET_BREAKPOINT));

    const onWidthChange = () => {
      setIsTabletViewport(matchMediaQuery.matches);
    };

    if (matchMediaQuery.addEventListener) {
      matchMediaQuery.addEventListener("change", onWidthChange);
    } else {
      matchMediaQuery.addListener(onWidthChange);
    }

    onWidthChange();

    return () => {
      if (matchMediaQuery.removeEventListener) {
        matchMediaQuery.removeEventListener("change", onWidthChange);
      } else {
        matchMediaQuery.removeListener(onWidthChange);
      }
    };
  }, []);

  return isTabletViewport;
};
