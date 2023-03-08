require('dotenv').config()
const { google } = require('googleapis')

// Replace with the code you've got on

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_OAUTH_CLIENT_ID,
  process.env.GMAIL_OAUTH_CLIENT_SECRET,
  process.env.GMAIL_OAUTH_REDIRECT_URL,
)

const code = '4/0AWtgzh6mgihUxFBDVd70gNc79r6f7kOeQuABcem97BzyyzxHYUbxQSMS_6xUTga25VAnag'
const getToken = async () => {
  const { tokens } = await oauth2Client.getToken(code)
  console.info(tokens)
}

getToken()
