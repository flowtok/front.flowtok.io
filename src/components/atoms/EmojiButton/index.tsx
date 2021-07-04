import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import './styles.css';
import EmojiConvertor from 'emoji-js';
import parse from 'html-react-parser';

const emoji = new EmojiConvertor();

type EmojiButtonPropsT = any;

export const EmojiButton: FC<EmojiButtonPropsT> = ({}) => {
  const [htmlEmoji, setHtmlEmoji] = useState<string>('');
  const targetButton = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      const emojis = emoji.replace_unified(emojiFromBase);
      console.log(emojis);
      setHtmlEmoji(emojis);
    }
  }, []);

  const animateButton = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const button = targetButton.current;
    if (button) {
      void 0 !== e && e.preventDefault, button.classList.remove('animate');
      const t = localStorage.getItem('emoji'),
        o = document.getElementById('copyEmoji');
      if (o) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (o.value = t.trim()),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          o.select(),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          o.setSelectionRange(0, 99999),
          document.execCommand('copy'),
          button.classList.add('animate'),
          setTimeout(() => {
            button.classList.remove('animate');
          }, 700);
      }
    }
  };

  return (
    <>
      <div className="emoji-list">
        <span
          className="bubbly-button"
          id="emj"
          ref={targetButton}
          onClick={animateButton}
        >
          <>{parse(htmlEmoji)}</>
        </span>
      </div>
      <input id="copyEmoji" />
    </>
  );
};
