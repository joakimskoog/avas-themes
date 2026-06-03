import { getTheme, themes } from "../theme/registry";
import { clearThemeOverride, getThemeOverrideId, setThemeOverride } from "../theme/override";
import type { Theme } from "../theme/contract";
import { waitForElement } from "./waitForElement";

const customThemeValuePrefix = "avas-colors:";
const injectedThemeDatasetKey = "avasColorsThemeId";
const listListenerDatasetKey = "avasColorsListenerInstalled";

const themeListSelector = "aza-settings-group ul[mintradiolist]";
const themeListItemSelector = "li[mintradiolistitem]";

function getCustomThemeId(input: HTMLInputElement): string | null {
  return input.value.startsWith(customThemeValuePrefix)
    ? input.value.slice(customThemeValuePrefix.length)
    : null;
}

function setThemeFromInput(theme: Theme, input: HTMLInputElement): void {
  input.checked = true;
  setThemeOverride(theme);
}

function createThemeItem(theme: Theme, templateItem: HTMLLIElement): HTMLLIElement {
  const item = templateItem.cloneNode(true) as HTMLLIElement;
  const elementId = `avas-colors-${theme.id.replace(/[^a-z0-9_-]/gi, "-")}`;
  const label = item.querySelector<HTMLLabelElement>("label");
  const input = item.querySelector<HTMLInputElement>('input[type="radio"]');
  const title = item.querySelector<HTMLElement>(".mint-title-text");

  if (!label || !input || !title) {
    throw new Error("Could not clone Avanza theme radio list item.");
  }

  item.dataset[injectedThemeDatasetKey] = theme.id;
  item.setAttribute("data-analytics-context", "Välj tema");
  item.setAttribute("data-analytics-label", theme.name);

  label.id = `${elementId}-label`;
  label.htmlFor = `${elementId}-input`;
  title.textContent = theme.name;

  input.id = `${elementId}-input`;
  input.value = `${customThemeValuePrefix}${theme.id}`;
  input.removeAttribute("checked");
  input.setAttribute("aria-labelledby", label.id);

  item.addEventListener("click", (event) => {
    event.stopPropagation();
    setThemeFromInput(theme, input);
  });

  return item;
}

function installThemeListListener(list: HTMLUListElement): void {
  if (list.dataset[listListenerDatasetKey] === "true") {
    return;
  }

  list.dataset[listListenerDatasetKey] = "true";
  list.addEventListener("change", (event) => {
    const input =
      event.target instanceof HTMLInputElement && event.target.type === "radio"
        ? event.target
        : null;

    if (!input?.checked) {
      return;
    }

    const themeId = getCustomThemeId(input);

    if (!themeId) {
      clearThemeOverride();
      return;
    }

    const theme = getTheme(themeId);

    if (!theme) {
      throw new Error(`Unknown Avas Colors theme "${themeId}".`);
    }

    setThemeFromInput(theme, input);
  });
}

function syncInjectedCheckedState(list: HTMLUListElement, themeOverrideId: string | null): void {
  for (const input of list.querySelectorAll<HTMLInputElement>('input[type="radio"]')) {
    const themeId = getCustomThemeId(input);

    if (themeId) {
      input.checked = themeOverrideId !== null && themeId === themeOverrideId;
    }
  }
}

function getTemplateItem(list: HTMLUListElement): HTMLLIElement | null {
  return (
    Array.from(list.querySelectorAll<HTMLLIElement>(themeListItemSelector)).find(
      (item) => !item.dataset[injectedThemeDatasetKey],
    ) ?? null
  );
}

function getExistingThemeIds(list: HTMLUListElement): Set<string> {
  const themeIds = new Set<string>();

  for (const item of list.querySelectorAll<HTMLLIElement>(themeListItemSelector)) {
    const themeId = item.dataset[injectedThemeDatasetKey];

    if (!themeId) {
      continue;
    }

    if (getTheme(themeId)) {
      themeIds.add(themeId);
    } else {
      item.remove();
    }
  }

  return themeIds;
}

function injectCustomThemes(list: HTMLUListElement): void {
  const templateItem = getTemplateItem(list);

  if (!templateItem) {
    throw new Error("Could not find Avanza theme radio list template.");
  }

  const existingThemeIds = getExistingThemeIds(list);

  for (const theme of themes) {
    if (existingThemeIds.has(theme.id)) {
      continue;
    }

    list.append(createThemeItem(theme, templateItem));
  }

  syncInjectedCheckedState(list, getThemeOverrideId());
  installThemeListListener(list);
}

export async function injectCustomThemesIntoNativeThemeList(): Promise<void> {
  const themeList = await waitForElement<HTMLUListElement>(themeListSelector, 3000);
  injectCustomThemes(themeList);
}
