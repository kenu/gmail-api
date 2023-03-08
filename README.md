# Monitor

- Send monitoring message to dev team

## Create Credentials

1. Menu menu > APIs & Services > Credentials. 사용자 인증 정보
2. Create Credentials > API key.
3. Application type > Desktop app.
4. Name, Create OAuth client with Client ID & Secret.
5. Download `credentials.json` and fill `.env` copied from `.env.sample`.

## Setup Process

- .env
- node generate.js
- node token.js
- node send.js

## etc

```
yarn install dotenv googleapis nodemailer
```
