import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT } from "./";

export const mediaQuery = (maxWidth: number) => `(max-width: ${maxWidth}px)`;

export const media = {
  custom: mediaQuery,
  tablet: `@media ${mediaQuery(TABLET_BREAKPOINT)}`,
  mobile: `@media ${mediaQuery(MOBILE_BREAKPOINT)}`,
};
