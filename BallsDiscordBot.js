const BallsJS = require('discord.js');
const Balls   = new BallsJS.Client();
let token     = 'balls';
let prefix    = '()';
let balls = 'BALLS';

 
// Messag eenent
Balls.on('message', message => {
  if (message.content === prefix+"balls") {
      message.channel.send("BALLS")
  }
})


// READY
Balls.on('ready', () => {
  console.log("balls")
})


Balls.login(token)
console.log(balls)
