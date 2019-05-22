const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("580481563637317671")
setInterval(function() {
channel.send(`plz plz plz plz plz plz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
