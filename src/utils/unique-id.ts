export const createIdGenerator = (name: string) => {
  let count = 0;
  return () => {
    return `${name}-${count++}-${Date.now()}`;
  };
};
