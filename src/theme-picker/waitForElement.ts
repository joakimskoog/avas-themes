export function waitForElement<T extends Element = Element>(
  selector: string,
  timeoutMs = 3000,
): Promise<T> {
  const existing = document.querySelector<T>(selector);

  if (existing) {
    return Promise.resolve(existing);
  }

  return new Promise((resolve, reject) => {
    function cleanup(): void {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector<T>(selector);

      if (!element) {
        return;
      }

      cleanup();
      resolve(element);
    });

    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error(`Timed out waiting for selector: ${selector}`));
    }, timeoutMs);

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
}
