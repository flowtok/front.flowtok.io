export const adaptiveValue = (
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
