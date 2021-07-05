import EmojiConvertor from 'emoji-js';

const emoji = new EmojiConvertor();
emoji.replace_mode = 'css';
emoji.include_title = true;
emoji.img_sets.apple.path =
  'https://api.flowtok.online/emoji-data/img-apple-64/';

export default emoji;
