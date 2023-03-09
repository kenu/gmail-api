function job2() {
  console.log('==== every 5 seconds in job02.js')
}

module.exports = {
  schedule: '*/15 * 12 * * *',
  job: job2
}

