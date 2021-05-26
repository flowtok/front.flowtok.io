const fs = require('fs');
const re = /(font-size:(.\d*)+px;)|(line-height:(.\d*)+px;)|(grid-gap:(.\d*)+px;)|((width|height):(.\d*)+px;)|(letter-spacing:(.\d*)+px;)|((border)(-radius):(.\d*)+px;)|((padding|margin)(-top|-left|-right|-bottom)?:(.\d*)+px;)/g;

function getFiles(dir, files_) {
  files_ = files_ || [];
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      if (name.indexOf('.scss') > -1 && name.indexOf('/styles/') === -1) files_.push(name);
    }
  }
  return files_;
}

function checkType(occurrence, string, position) {
  const mTop = occurrence.indexOf('margin-top');
  const mLeft = occurrence.indexOf('margin-left');
  const mBot = occurrence.indexOf('margin-bottom');
  const mRig = occurrence.indexOf('margin-right');
  const pTop = occurrence.indexOf('padding-top');
  const pLeft = occurrence.indexOf('padding-left');
  const pBot = occurrence.indexOf('padding-bottom');
  const pRig = occurrence.indexOf('padding-right');
  const bR = occurrence.indexOf('border-radius');
  if (occurrence.indexOf('font-size') > -1) return 'font-size';
  if (occurrence.indexOf('line-height') > -1) return 'line-height';
  if (occurrence.indexOf('letter-spacing') > -1) return 'letter-spacing';
  if (occurrence.indexOf('border') > -1 && bR === -1) return 'border-size';
  if (occurrence.indexOf('grid-gap') > -1 && bR === -1) return 'grid-gap';
  if (bR > -1) return 'border-radius';
  if (pTop > -1) return 'padding-top';
  if (pBot > -1) return 'padding-bottom';
  if (pRig > -1) return 'padding-right';
  if (pLeft > -1) return 'padding-left';
  if (mTop > -1) return 'margin-top';
  if (mBot > -1) return 'margin-bottom';
  if (mRig > -1) return 'margin-right';
  if (mLeft > -1) return 'margin-left';
  if (occurrence.indexOf('margin') > -1 && mTop === -1 && mLeft === -1 && mRig === -1 && mBot === -1) return 'margin';
  if (occurrence.indexOf('padding') > -1 && pTop === -1 && pLeft === -1 && pRig === -1 && pBot === -1) return 'padding';
  if (occurrence.indexOf('width') > -1) {
    if (string.substring(position - 4, position) === 'max-') {
      return 'max-width';
    } else return 'width';
  }
  if (occurrence.indexOf('height') > -1) {
    if (string.substring(position - 4, position) === 'max-') {
      return 'max-height';
    } else return 'height';
  }
}

function occurrencesSerializer(re, string) {
  const occurrences = string.match(re);
  const positions = [];
  occurrences.forEach(o => {
    if (positions.find(p => p === string.indexOf(o))) {
      positions.push(string.indexOf(o, string.indexOf(o)));
    } else {
      positions.push(string.indexOf(o));
    }
  });
  return occurrences.map((i, key) => {
    if (i.match(/-?\d+(\.\d+)?/g) !== null) {
      return {
        occurrence: i,
        type: checkType(i, string, string.indexOf(i)),
        value: i.match(/-?\d+(\.\d+)?/g),
        position: positions[key],
      };
    }
  });
}

let successList = [];

function divideData(occurrenceData, data) {
  if (occurrenceData) {
    const parts = [];
    if (successList.find(s => s === occurrenceData.occurrence)) {
      parts.push([
        data.slice(0, data.indexOf(occurrenceData.occurrence, data.indexOf(occurrenceData.occurrence) + occurrenceData.occurrence.length) + occurrenceData.occurrence.length),
        data.slice(-((data.length - data.indexOf(occurrenceData.occurrence, data.indexOf(occurrenceData.occurrence) + occurrenceData.occurrence.length) - occurrenceData.occurrence.length))),
      ]);
    } else {
      parts.push([
        data.slice(0, data.indexOf(occurrenceData.occurrence) + occurrenceData.occurrence.length),
        data.slice(-((data.length - data.slice(0, data.indexOf(occurrenceData.occurrence)).length) - occurrenceData.occurrence.length)),
      ]);
    }
    successList.push(occurrenceData.occurrence);
    return parts;
  }
}

function getFileWithMixin(occurrences, data) {
  if (occurrences.length) {
    let preparedData = data;
    occurrences.filter(i => i).forEach(occurrence => {
      const parts = divideData(occurrence, preparedData)[0];
      if (occurrence.type === 'padding' || occurrence.type === 'margin') {
        if (occurrence.value.length === 1 && !occurrence.value.find(i => i === '0')) {
          preparedData = `${parts[0]}\n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-top, ${occurrence.value[0]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-left, ${occurrence.value[0]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-right, ${occurrence.value[0]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-bottom, ${occurrence.value[0]}); ${parts[1]}`;
        } else if (occurrence.value.length === 2) {
          preparedData = `${parts[0]}\n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-top, ${occurrence.value[0]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-left, ${occurrence.value[1]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-right, ${occurrence.value[1]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-bottom, ${occurrence.value[0]}); ${parts[1]}`;
        } else if (occurrence.value.length === 3) {
          preparedData = `${parts[0]}\n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-top, ${occurrence.value[0]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-left, ${occurrence.value[2]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-right, ${occurrence.value[1]}); ${parts[1]}`;
        } else if (occurrence.value.length === 4) {
          preparedData = `${parts[0]}\n \t@include adaptive-value-${process.argv[2]}t(${occurrence.type}-top, ${occurrence.value[0]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-left, ${occurrence.value[3]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-right, ${occurrence.value[1]});
           \n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}-bottom, ${occurrence.value[2]}); ${parts[1]}`;
        }
      } else {
        preparedData = `${parts[0]}\n \t@include adaptive-value-${process.argv[2]}(${occurrence.type}, ${occurrence.value}); ${parts[1]}`;
      }
    });
    if (preparedData.indexOf('@import "src/styles/mixins"') === -1) {
      preparedData = '@import "src/styles/mixins";\n'.concat(preparedData);
    }
    return preparedData;
  }
}

const files = getFiles('src/components/organisms/Navbar/desktopLarge/');

files.forEach(file => {
  new Promise(resolve => {
    fs.readFile(file, 'utf-8', (err, data) => resolve({ file, data }));
  }).then(data => {
    if (data.data.match(re) !== null) {
      const occurrenceData = occurrencesSerializer(re, data.data);
      const preparedFile = getFileWithMixin(occurrenceData, data.data);
      const dir = data.file.split('/').slice(0, -1).join('/');
      successList = [];
      fs.unlink(dir + '/styles.module.scss', () => {
      });
      fs.appendFile(dir + '/styles.module.scss', preparedFile, () => {
      });
    }
  });
});