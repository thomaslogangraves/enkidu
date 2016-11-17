const fs = require('fs');
const parse = require('csv-parse');
const jStat = require('jStat').jStat;

const fileName = 'HR.csv';

function parseTool(file, cb) {
  const csvData=[];
  fs.createReadStream(file)
      .pipe(parse({delimiter: ':'}))
      .on('data', function(csvrow) {
          transformedData = parseInt(csvrow);
          csvData.push(transformedData);
      })
      .on('end',function() {
        //do something wiht csvData
        csvData.splice(0,2);
        cb(csvData)
      })
      .once('error', cb);
}


  parseTool(fileName, function(csvData){
    return jStat(csvData).stdev();
  });
