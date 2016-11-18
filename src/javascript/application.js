var fs = require('fs');
var parse = require('csv-parse');
var jStat = require('jStat').jStat;

var csv = './HR.csv';
var eda = './EDA.csv';

function parseTool(file, cb) {
  var csvData=[];
  fs.createReadStream(file)
      .pipe(parse({delimiter: ':'}))
      .on('data', function(csvrow) {
          transformedData = parseInt(csvrow);
          csvData.push(transformedData);
      })
      .on('end',function() {
        //do something wiht csvData
        csvData.splice(0,2)
        cb(csvData);
      })
      .once('error', cb);
}


  parseTool(csv, function(csvData){
    console.log(jStat(csvData).stdev());
  });

  parseTool(eda, function(csvData){
    console.log(jStat(csvData).stdev());
  });
