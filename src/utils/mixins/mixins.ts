export const MIN_LARGE_DESKTOP_CONTAINER = 1440;
export const DESIGN_TABLET_CONTAINER = 600;
export const MIN_TABLET_CONTAINER = 600;

export const DESIGN_LARGE_DESKTOP_CONTAINER = 1920;
export const MAX_TABLET_CONTAINER = 1024;

export type ComputeAdaptiveValueParams = {
  value: number; // значение из дизайна
  container: number; // ширина контейнера из дизайна, в котором у нас стоит значение value
  minContainer: number; // минимальная ширина контейнера, при котором свойство становится адаптивным
  windowWidth: number; // текущая ширина
};

export const computeAdaptiveValue = ({
  value,
  minContainer,
  container,
  windowWidth,
}: ComputeAdaptiveValueParams) => {
  if (windowWidth < minContainer) {
    return value;
  }
  const ratio = value / container;
  return windowWidth * ratio;
};

export const computeLargeDesktopAdaptiveValue = (
  value: number,
  windowWidth: number
) => {
  if (windowWidth < MIN_LARGE_DESKTOP_CONTAINER) {
    return value;
  }

  const ratio = value / DESIGN_LARGE_DESKTOP_CONTAINER;
  return windowWidth * ratio;
};

export const computeTabletAdaptiveValue = (
  value: number,
  windowWidth: number
) => {
  if (
    windowWidth < MIN_TABLET_CONTAINER ||
    windowWidth > MAX_TABLET_CONTAINER
  ) {
    return value;
  }

  const ratio = value / DESIGN_TABLET_CONTAINER;
  return windowWidth * ratio;
};
