import type { Theme, ThemeVariable } from "./contract";
import { themeVariables } from "./contract";

const themeStyleElementId = "avas-colors-theme";

const migrationAliases = {
  "--mint-color-migrate-from-surface-main-to-background-primary": "--mint-color-background-primary",
  "--mint-color-migrate-from-surface-main-to-container-primary": "--mint-color-container-primary",
  "--mint-color-migrate-from-surface-neutral-to-container-primary":
    "--mint-color-container-primary",
  "--mint-color-migrate-from-surface-elevated-to-container-primary":
    "--mint-color-container-primary",
  "--mint-color-migrate-from-list-normal-to-container-primary": "--mint-color-container-primary",
  "--mint-color-migrate-from-button-discreet-normal-to-container-primary":
    "--mint-color-container-primary",
  "--mint-color-migrate-from-list-neutral-hover-to-container-primary-hover":
    "--mint-color-container-primary-hover",
  "--mint-color-migrate-from-list-neutral-selected-to-container-primary-hover":
    "--mint-color-container-primary-hover",
  "--mint-color-migrate-from-list-neutral-expanded-to-container-secondary":
    "--mint-color-container-secondary",
  "--mint-color-migrate-from-button-discreet-hover-to-container-primary-hover":
    "--mint-color-container-primary-hover",
  "--mint-color-migrate-from-selectable-hover-to-container-primary-hover":
    "--mint-color-container-primary-hover",
  "--mint-color-migrate-from-surface-discreet-a-to-container-brand": "--mint-color-container-brand",
  "--mint-color-migrate-from-surface-discreet-to-container-brand": "--mint-color-container-brand",
  "--mint-color-migrate-from-tag-normal-to-container-brand": "--mint-color-container-brand",
  "--mint-color-migrate-from-selectable-selected-to-container-brand":
    "--mint-color-container-brand",
  "--mint-color-migrate-from-surface-brand-to-container-active": "--mint-color-container-active",
  "--mint-color-migrate-from-surface-info-to-container-info": "--mint-color-container-info",
  "--mint-color-migrate-from-text-main-to-content-primary": "--mint-color-content-primary",
  "--mint-color-migrate-from-icon-neutral-to-content-primary": "--mint-color-content-primary",
  "--mint-color-migrate-from-text-brand-to-content-primary": "--mint-color-content-primary",
  "--mint-color-migrate-from-tag-normal-text-to-content-primary": "--mint-color-content-primary",
  "--mint-color-migrate-from-button-discreet-normal-text-to-content-primary":
    "--mint-color-content-primary",
  "--mint-color-migrate-from-button-discreet-hover-text-to-content-primary":
    "--mint-color-content-primary",
  "--mint-color-migrate-from-button-discreet-pressing-text-to-content-primary":
    "--mint-color-content-primary",
  "--mint-color-migrate-from-button-secondary-normal-text-to-content-primary":
    "--mint-color-content-primary",
  "--mint-color-migrate-from-button-secondary-hover-text-to-content-primary":
    "--mint-color-content-primary",
  "--mint-color-migrate-from-icon-secondary-to-content-secondary": "--mint-color-content-secondary",
  "--mint-color-migrate-from-text-discreet-to-content-secondary": "--mint-color-content-secondary",
  "--mint-color-migrate-from-icon-primary-to-content-brand-decorative":
    "--mint-color-content-brand-decorative",
  "--mint-color-migrate-from-button-minimal-primary-normal-text-to-content-link":
    "--mint-color-content-link",
  "--mint-color-migrate-from-button-minimal-primary-hover-text-to-content-link-hover":
    "--mint-color-content-link-hover",
  "--mint-color-migrate-from-button-primary-normal-text-to-content-inverse":
    "--mint-color-content-inverse",
  "--mint-color-migrate-from-tag-hover-to-tag-new-hover": "--mint-color-tag-new-hover",
  "--mint-color-migrate-from-button-primary-normal-to-button-primary":
    "--mint-color-button-primary",
  "--mint-color-migrate-from-button-secondary-border-to-button-primary":
    "--mint-color-button-primary",
  "--mint-color-migrate-from-button-primary-hover-to-button-primary-hover-new":
    "--mint-color-button-primary-hover-new",
  "--mint-color-migrate-from-button-secondary-normal-to-button-secondary":
    "--mint-color-button-secondary",
  "--mint-color-migrate-from-button-secondary-border-to-button-secondary":
    "--mint-color-button-secondary",
  "--mint-color-migrate-from-button-secondary-hover-to-button-secondary-hover-new":
    "--mint-color-button-secondary-hover-new",
  "--mint-color-migrate-from-border-discreet-to-stroke-primary": "--mint-color-stroke-primary",
  "--mint-color-migrate-from-border-subtle-to-stroke-primary": "--mint-color-stroke-primary",
  "--mint-color-migrate-from-button-discreet-border-to-stroke-primary":
    "--mint-color-stroke-primary",
  "--mint-color-migrate-from-button-discreet-emphasize-to-stroke-active":
    "--mint-color-stroke-active",
  "--mint-color-migrate-from-selectable-emphasize-to-stroke-active": "--mint-color-stroke-active",
} satisfies Record<string, ThemeVariable>;

function getThemeStyleParent(): HTMLElement {
  return document.head ?? document.documentElement;
}

function getThemeStyleElement(): HTMLStyleElement {
  const existing = document.getElementById(themeStyleElementId);

  if (existing instanceof HTMLStyleElement) {
    getThemeStyleParent().append(existing);

    return existing;
  }

  const style = document.createElement("style");
  style.id = themeStyleElementId;
  getThemeStyleParent().append(style);

  return style;
}

function getThemeCss(theme: Theme): string {
  const variables = [
    ...themeVariables.map((variable) => `  ${variable}: ${theme.variables[variable]} !important;`),
    ...Object.entries(migrationAliases).map(
      ([alias, variable]) => `  ${alias}: ${theme.variables[variable]} !important;`,
    ),
  ].join("\n");

  return [
    `/* Avas Colors: ${theme.name} */`,
    ":root,",
    "body,",
    "body[data-theme],",
    "[data-sub-theme] {",
    variables,
    "}",
  ].join("\n");
}

export function setThemeStyle(theme: Theme): void {
  getThemeStyleElement().textContent = getThemeCss(theme);
}

export function clearThemeStyle(): void {
  document.getElementById(themeStyleElementId)?.remove();
}
