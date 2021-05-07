const fs = require('fs');

const inputFile = 'src/pages/home/styles.module.scss';

function getListIdx(str, substr) {
  let listIdx = [];
  let lastIndex = -1;
  while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
    listIdx.push(lastIndex);
  }
  return listIdx;
}

const p = new Promise((resolve, reject) => {
  fs.readFile(inputFile, 'utf8', (err, data) => resolve(data));
})
  .then(data => getListIdx(data, 'font-size:'))
  .then(data => console.log(data));
