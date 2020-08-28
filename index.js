const utils = require("./utils");
const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "xxxx";

const PREFIX = "*";

bot.on("ready", () => {
  console.log("BOT ONLINE");
});

bot.on("message", (message) => {
  // if(msg.content === "PRIVET"){
  // msg.reply('HI');
  let args = message.content.substring(PREFIX.length).split(" ");

  let reply = utils.replyForMsg(args[0]);
  message.channel.send(reply);
});

bot.login(token);
