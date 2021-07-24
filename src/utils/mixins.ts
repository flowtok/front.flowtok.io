export const MIN_LARGE_DESKTOP_CONTAINER = 1440;
export const MIN_DESKTOP_CONTAINER = 1024;
export const MIN_TABLET_CONTAINER = 600;

export const DESIGN_LARGE_DESKTOP_CONTAINER = 1920;
export const MAX_TABLET_CONTAINER = 1024;

export const computeAdaptiveValue = (
  value: number, // value from design
  container: number, // container from design
  minContainer: number,
  curWidth: number // current window width
) => {
  if (curWidth < minContainer) {
    return value;
  }
  const max = container / (minContainer / value);
  const addValue = max - value;
  return (
    value + (addValue * (curWidth - minContainer)) / (container - minContainer)
  );
};

export const computeLargeDesktopAdaptiveValue = (
  designValue: number,
  windowWidth: number
) => {
  const min =
    MIN_LARGE_DESKTOP_CONTAINER /
    (DESIGN_LARGE_DESKTOP_CONTAINER / designValue);
  const addValue = designValue - min;
  return (
    min +
    (addValue * (windowWidth - MIN_LARGE_DESKTOP_CONTAINER)) /
      (DESIGN_LARGE_DESKTOP_CONTAINER - MIN_LARGE_DESKTOP_CONTAINER)
  );
};

export const computeTabletAdaptiveValue = (
  designValue: number,
  windowWidth: number
) => {
  const max = MAX_TABLET_CONTAINER / (MIN_TABLET_CONTAINER / designValue);
  const addValue = max - designValue;
  return (
    designValue +
    (addValue * (windowWidth - MIN_TABLET_CONTAINER)) /
      (MAX_TABLET_CONTAINER - MIN_TABLET_CONTAINER)
  );
};
