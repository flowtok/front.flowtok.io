import EmojiConvertor from 'emoji-js';

const Emoji = new EmojiConvertor();
Emoji.replace_mode = 'css';
Emoji.include_title = true;
Emoji.img_sets.apple.path =
  'https://api.flowtok.online/emoji-data/img-apple-64/';

export default Emoji;
