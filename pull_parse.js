module.exports.parseTool = function() {
  const fs = require('fs');
  const csv = require('fast-csv');
  const dataSet = [];

  fs.createReadStream('./HR.csv', function(err, ))
    .pipe(csv())
    .on('data', function(data){
      dataSet.push(data);
    })
    .on('end', function(data){
      dataSet.splice(0, 2)
    });
}
