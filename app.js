'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// include command handler
const command_handler = require('./src/command_handler');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || 'aaaa',
  channelSecret: process.env.CHANNEL_SECRET || 'aaaa',
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
let handleEvent = (event) => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  const message = command_handler.handle_command(event.message.text);

  // use reply API
  if(message) {
    return client.replyMessage(event.replyToken, message);
  }
}

// listen on port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);

  // DEBUG
  // let hehe = (command_handler.handle_command('Tampilin data kesehatanku dong'));
  // if(hehe) {
  //   console.log(hehe);
  // }
});
