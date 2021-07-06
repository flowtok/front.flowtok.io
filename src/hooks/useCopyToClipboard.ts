import { useLayoutEffect, useState } from 'react';

export type useCopyToClipboardReturnValueT = [
  (value: string) => Promise<any>,
  boolean
];

export const useCopyToClipboard = (
  interval: number
): useCopyToClipboardReturnValueT => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return [
    async (value: string) => {
      if (!isCopied) {
        navigator.clipboard.writeText(value).then(() => setIsCopied(true));
      }
    },
    isCopied,
  ];
};
