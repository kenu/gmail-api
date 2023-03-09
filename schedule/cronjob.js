const CronJob = require('cron').CronJob

const pool = {
  jobs: [],
  generateJob: function (schedule, job) {
    return new CronJob(schedule, job, null, true, 'Asia/Seoul')
  },
  register: function (item) {
    this.jobs.push(this.generateJob(item.schedule, item.job))
  },
  start: function () {
    this.jobs.forEach(job => job.start())
  }
}

pool.register(require('./job01'))
pool.register(require('./job02'))


module.exports = pool
