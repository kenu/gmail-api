const express = require('express')
const router = express.Router()
const gmail = require('../utils/gmail')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const t = await gmail.sendCustom('kenu.heo@gmail.com', 'testemail', '<h6>testemail</h6><p>Almost there</p>')
  console.log(t)
  res.send('respond with a resource')
})

module.exports = router
