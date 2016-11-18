'use strict';
import fs from 'fs';
import parse from 'csv-parse';

export function parseTool(file, cb) {
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
};
