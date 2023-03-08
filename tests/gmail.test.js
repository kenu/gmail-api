const gmail = require('../utils/gmail')

test('testing mail', () => {
  const options = {
    to: 'kenu.heo@gmail.com',
    subject: 'subject',
    html: '<h3>YeaStudio</h3>',
  }
  gmail.sendEmail(options)
  gmail.sendCustom(
    'hbenicloud@gmail.com',
    'subject other',
    `<h3>YeaStudio</h3>
  <a href="https://painterus.com">click to go</a>`,
  )
})
