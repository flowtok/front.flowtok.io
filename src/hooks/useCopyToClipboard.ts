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
        if (navigator?.clipboard) {
          navigator.clipboard.writeText(value).then(() => setIsCopied(true));
        } else {
          const area = document.createElement('textarea');

          document.body.appendChild(area);
          area.value = value;
          area.select();
          document.execCommand('copy');
          document.body.removeChild(area);
          setIsCopied(true);
        }
      }
    },
    isCopied,
  ];
};
