let emojiFromBase = '';
setInterval(() => {
  emojiFromBase = localStorage.getItem('emoji');
}, 1e3);
let emojis = emoji.replace_unified(emojiFromBase);
const button = document.getElementById('emj');
button.innerHTML = emojis;
const animateButton = function (e) {
  void 0 !== e && e.preventDefault, button.classList.remove('animate');
  let t = emojiFromBase,
    o = document.getElementById('copyEmoji');
  (o.value = t.trim()),
    o.select(),
    o.setSelectionRange(0, 99999),
    document.execCommand('copy'),
    button.classList.add('animate'),
    setTimeout(() => {
      button.classList.remove('animate');
    }, 700);
};
button.addEventListener('click', animateButton, !1);
