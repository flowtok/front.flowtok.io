import { useLayoutEffect, useState } from 'react';
import { Callback } from '@root/types/helpers';

export type UseCopyToClipboardReturnValue = [
  (value: string) => Promise<any>,
  boolean
];

export type UseCopyToClipboardProps = {
  freezeTime: number;
  onCopy?: Callback;
};

export const useCopyToClipboard = ({
  onCopy,
  freezeTime,
}: UseCopyToClipboardProps): UseCopyToClipboardReturnValue => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, freezeTime);
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
        if (onCopy) {
          onCopy();
        }
      }
    },
    isCopied,
  ];
};
