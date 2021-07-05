import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import './styles.css';
import emoji from '../../../configs/emoji';
import parse from 'html-react-parser';
import { useAnimationClass } from '../../../hooks/useAnimationClass';

type EmojiButtonPropsT = any;

export const EmojiButton: FC<EmojiButtonPropsT> = ({}) => {
  const [htmlEmoji, setHtmlEmoji] = useState<string>('');
  const targetButton = useRef<HTMLSpanElement>(null);
  const emojiInput = useRef<HTMLInputElement>(null);
  const bubbles = useAnimationClass(targetButton, 'bubbles', 750);

  useLayoutEffect(() => {
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      const emojis = emoji.replace_unified(emojiFromBase);
      setHtmlEmoji(emojis);
    }
  }, []);

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    bubbles(e);
    const emojiFromBase = localStorage.getItem('emoji');
    const input = emojiInput.current;
    if (input && emojiFromBase) {
      input.value = emojiFromBase.trim();
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');
    }
  };

  return (
    <>
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
      <input id="copyEmoji" ref={emojiInput} />
    </>
  );
};
