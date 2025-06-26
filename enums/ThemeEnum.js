/*
 * ThemeEnum
 * An immutable object that contains restricted values for data-theme.
 *
 * ThemeEnumValues
 * An immutable Set, with values from the ThemeEnum.
 *
 * Purpose:
 * To restrict values accepted by data-theme from the ThemeProvider component.
 * This will make sure that only valid values can be set to the ThemeProvider.
 */

const ThemeEnum = Object.freeze({
  Light: 'light',
  Dark: 'dark',
  // Monochrome: 'monochrome',
  // Protanopia: 'protanopia',
  // Deuteranopia: 'deuteranopia',
  // Tritanopia: 'tritanopia'
});

const ThemeEnumValues = Object.freeze(new Set(Object.values(ThemeEnum)));

export { ThemeEnum, ThemeEnumValues };
