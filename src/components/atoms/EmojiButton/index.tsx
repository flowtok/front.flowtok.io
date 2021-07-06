import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import './styles.css';
import emoji from '../../../configs/emoji';
import parse from 'html-react-parser';
import { useAnimationClass } from '../../../hooks/useAnimationClass';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';

type EmojiButtonPropsT = any;

export const EmojiButton: FC<EmojiButtonPropsT> = ({}) => {
  const [htmlEmoji, setHtmlEmoji] = useState<string>('');
  const targetButton = useRef<HTMLSpanElement>(null);
  const animateButton = useAnimationClass(targetButton, 'bubbles', 750);
  const [copy] = useCopyToClipboard(1000);

  useLayoutEffect(() => {
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      const emojis = emoji.replace_unified(emojiFromBase);
      setHtmlEmoji(emojis);
    }
  }, []);

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    animateButton(e);
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      copy(emojiFromBase);
    }
  };

  return (
    <div className="emoji-list">
      <span
        className="bubbly-button"
        id="emj"
        ref={targetButton}
        onClick={onClick}
      >
        <>{parse(htmlEmoji)}</>
      </span>
    </div>
  );
};
