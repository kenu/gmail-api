let count = 0;
const job1 = function () {
  console.log('change ./schedule/job*.js ' + count++)
}
module.exports = {
  schedule: '*/20 * * * * *',
  job: job1
}
