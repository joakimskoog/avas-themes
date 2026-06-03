import type { Theme } from "./contract";

type ThemeModule = {
  default?: Theme;
};

const themeModules = import.meta.glob<ThemeModule>("../themes/**/*.ts", {
  eager: true,
});

function isPublicThemeModule(path: string): boolean {
  return !path.split("/").some((segment) => segment.startsWith("_"));
}

export const themes: readonly Theme[] = Object.entries(themeModules)
  .filter(([path]) => isPublicThemeModule(path))
  .map(([, module]) => module.default)
  .filter((theme): theme is Theme => theme !== undefined)
  .sort((firstTheme, secondTheme) => firstTheme.name.localeCompare(secondTheme.name));

export function getTheme(themeId: string): Theme | undefined {
  return themes.find((theme) => theme.id === themeId);
}
