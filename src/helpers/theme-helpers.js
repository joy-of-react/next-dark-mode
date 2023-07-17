import {
  LIGHT_COLORS,
  DARK_COLORS,
} from '@/constants';

/**
 * This method produces an object with the following shape:
 *
 * {
 *   '--color-text': 'hsl(0deg 0% 0%)',
 *   '--color-background': 'hsl(0deg 0% 100%)',
 *   ...and so on, for every key/value pair
 * }
 *
 * This method is used to populate the initial values
 * for each CSS variable, when rendering the <html>
 * tag in the root layout component.
 */
export function generateThemeStyleObject(theme) {
  const colors =
    theme === 'light'
      ? LIGHT_COLORS
      : DARK_COLORS;

  let output = {};

  Object.entries(colors).forEach(
    ([key, value]) => {
      output[`--color-${key}`] = value;
    }
  );

  return output;
}

/**
 * This method will make the required edits to the
 * root <html> tag, whenever the theme changes.
 */
export function dynamicallyChangeCssVars(theme) {
  const colors =
    theme === 'light'
      ? LIGHT_COLORS
      : DARK_COLORS;

  const root = document.documentElement;

  root.setAttribute('data-color-mode', theme);

  Object.entries(colors).forEach(
    ([key, value]) => {
      root.style.setProperty(
        `--color-${key}`,
        value
      );
    }
  );
}
