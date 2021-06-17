export const trimMoney = (s: string) => {
  return s.replace(/\s/g, '').slice(0, -1);
};

// export const formatMoney = () => {};

export const formatMoney = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};
