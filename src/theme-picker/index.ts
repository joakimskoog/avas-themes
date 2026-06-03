import { injectCustomThemesIntoNativeThemeList } from "./nativeThemeList";

const avanzaRouteLoadingEventName = "azaRouteLoadingEventService_RouteLoadingEvent";
const debugLogPrefix = "[Avas Colors]";
const themeSettingsPath = "/min-profil/installningar/sajtinstallningar.html/tema";

function isThemeSettingsPath(path: string): boolean {
  return path.split(/[?#]/)[0].replace(/\/$/, "") === themeSettingsPath;
}

function isThemeSettingsPage(): boolean {
  return window.location.pathname.replace(/\/$/, "") === themeSettingsPath;
}

function isThemeSettingsRouteLoaded(event: Event): boolean {
  const url = (
    event as CustomEvent<{
      data?: { eventType?: { url?: string } };
    }>
  ).detail?.data?.eventType?.url;

  return url !== undefined && isThemeSettingsPath(url);
}

function handleAvanzaRouteLoaded(event: Event): void {
  if (!isThemeSettingsRouteLoaded(event)) {
    return;
  }

  queueMicrotask(() => {
    injectCustomThemesIntoNativeThemeList().catch((error: unknown) => {
      if (!isThemeSettingsPage()) {
        return;
      }

      console.warn(`${debugLogPrefix} Could not inject custom themes.`, error);
    });
  });
}

export function installThemePicker(): void {
  document.addEventListener(avanzaRouteLoadingEventName, handleAvanzaRouteLoaded);
}
