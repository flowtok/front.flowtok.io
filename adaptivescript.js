const fs = require('fs');
const mkdirp = require('mkdirp');
const re = /(font-size: [0-9]+px;)|(width: [0-9]+px;)|(line-height: [0-9]+px;)|(max-width: [0-9]+px;)|(max-height: [0-9]+px;)|(letter-spacing: [0-9]+px;)|(border-radius: [0-9]+px;)|(padding-bottom: [0-9]+px;)|(padding-top: [0-9]+px;)|(padding-right: [0-9]+px;)|(padding-left: [0-9]+px;)|(margin-bottom: [0-9]+px;)|(margin-top: [0-9]+px;)|(margin-right: [0-9]+px;)|(margin-left: [0-9]+px;)/g;

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

function checkType(occurrence) {
  if (occurrence.indexOf('font-size') > -1) return 'font-size';
  if (occurrence.indexOf('width') > -1) return 'width';
  if (occurrence.indexOf('max-width') > -1) return 'max-width';
  if (occurrence.indexOf('max-height') > -1) return 'max-height';
  if (occurrence.indexOf('line-height') > -1) return 'line-height';
  if (occurrence.indexOf('letter-spacing') > -1) return 'letter-spacing';
  if (occurrence.indexOf('border-radius') > -1) return 'border-radius';
  if (occurrence.indexOf('padding-top') > -1) return 'padding-top';
  if (occurrence.indexOf('padding-bottom') > -1) return 'padding-bottom';
  if (occurrence.indexOf('padding-right') > -1) return 'padding-right';
  if (occurrence.indexOf('padding-left') > -1) return 'padding-left';
  if (occurrence.indexOf('margin-top') > -1) return 'margin-top';
  if (occurrence.indexOf('margin-bottom') > -1) return 'margin-bottom';
  if (occurrence.indexOf('margin-right') > -1) return 'margin-right';
  if (occurrence.indexOf('margin-left') > -1) return 'margin-left';
}

function occurrencesSerializer(re, string) {
  const occurrences = string.match(re);
  return occurrences.map(i => {
    const checkForCalc = (i.indexOf('calc') === -1);
    const checkForPercent = (i.indexOf('%') === -1);
    const checkForVh = (i.indexOf('vh') === -1);
    const checkForVw = (i.indexOf('vw') === -1);
    if (checkForCalc && checkForPercent && checkForVh && checkForVw) {
      if (+/\d+/.exec(i) !== 0) {
        return {
          occurrence: i,
          type: checkType(i),
          value: +/\d+/.exec(i),
        };
      }
    }
  });
}

function divideData(occurrenceData, data) {
  return [
    data.slice(0, data.indexOf(occurrenceData.occurrence) + occurrenceData.occurrence.length),
    data.slice(-((data.length - data.slice(0, data.indexOf(occurrenceData.occurrence)).length) - occurrenceData.occurrence.length)),
  ];
}

function getFileWithMixin(occurrences, data) {
  if (occurrences.length) {
    let preparedData = data;
    occurrences.forEach(occurrence => {
      const parts = divideData(occurrence, preparedData);
      if (data.indexOf(`@include adaptive-value-tablet(${occurrence.type}, ${occurrence.value});`) === -1) {
        preparedData = `${parts[0]}\n \t@include adaptive-value-tablet(${occurrence.type}, ${occurrence.value}); ${parts[1]}`;
      }
    });
    if (preparedData.indexOf('@import "src/styles/mixins"') === -1) {
      preparedData = '@import "src/styles/mixins";\n'.concat(preparedData);
    }
    return preparedData;
  }
}

const files = getFiles('src');
files.forEach(file => {
  new Promise(resolve => {
    fs.readFile(file, 'utf-8', (err, data) => resolve({ file, data }));
  }).then(data => {
    if (data.data.match(re) !== null) {
      const occurrenceData = occurrencesSerializer(re, data.data);
      const preparedFile = getFileWithMixin(occurrenceData, data.data);
      const dir = data.file.split('/').slice(0, -1).join('/');
      mkdirp.sync('adaptive/' + dir);
      fs.open('adaptive/' + dir + '/style.scss', 'w', () => console.log(`'adaptive/'${dir}'style.scss' created`));
      fs.appendFile('adaptive/' + dir + '/style.scss', preparedFile, () => console.log('success'));
    }
  });
});
