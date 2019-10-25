# Portfolio Server

A simple project built using node to send an email to user

## Set up

- clone the repo
- setup the .env file
- install dependencies using `yarn install`
- start the server using `yarn dev:start`

## Endpoints

This app has one available *POST* endpoint that can be found at `/`

```javascript
{
  message: 'string',
  receiver: 'valid email string'
}
```

## Deploy

This project is hosted on heroku

[Go to Portfolio Server](https://njery-portfolio-server.herokuapp.com/)
