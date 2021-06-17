import { useLocation } from 'react-router-dom';

export const useUrlSearchParams = () => {
  return new URLSearchParams(useLocation().search);
};
