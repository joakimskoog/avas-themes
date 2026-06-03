import { getTheme } from "./registry";
import { clearThemeStyle, setThemeStyle } from "./style";
import type { Theme } from "./contract";

const themeOverrideStorageKey = "avas-colors-theme-override";

export function getThemeOverrideId(): string | null {
  const themeId = window.localStorage.getItem(themeOverrideStorageKey);

  return themeId;
}

export function setThemeOverride(theme: Theme): void {
  window.localStorage.setItem(themeOverrideStorageKey, theme.id);
  setThemeStyle(theme);
}

export function clearThemeOverride(): void {
  window.localStorage.removeItem(themeOverrideStorageKey);
  clearThemeStyle();
}

export function restoreThemeOverride(): void {
  const themeId = getThemeOverrideId();

  if (!themeId) {
    return;
  }

  const theme = getTheme(themeId);

  if (theme) {
    setThemeStyle(theme);
  }
}
