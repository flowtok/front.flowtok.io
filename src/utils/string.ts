export const trimMoney = (s: string) => {
  return s.replace(/\s/g, '').slice(0, -1);
};
