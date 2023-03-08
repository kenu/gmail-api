const gmail = require('../utils/gmail')

const options = {
  to: 'hkn@yeastudio.net',
  subject: '테스트1 ✅ ' + Date.now(),
  html: `This mail is for <a href="https://playground.yeastudio.net" target="_blank">함께 그리기</a>`,
}

gmail.sendEmail(options)
