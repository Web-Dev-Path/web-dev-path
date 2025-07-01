/*
 * ThemeProvider Component
 * Purpose:
 * Injects a theme base on set theme value.
 *
 * Application:
 * Wrap to elements or components that needs the theme to be injected.
 */

'use client';

import { isValidEnum } from '../../../utils/helpers/isValidEnum';
import { ThemeEnumValues } from '../../../enums/ThemeEnum';

const ThemeProvider = ({ theme, children }) => {
  return <div data-theme={isValidEnum(theme, ThemeEnumValues)}>{children}</div>;
};

export { ThemeProvider };
