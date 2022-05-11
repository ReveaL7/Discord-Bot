const Discord = require("discord.js");
const client = new Discord.Client();

Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

const token = "token";

const prefix = "";

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);

  const arrayOfStatus = [
    `Over ${client.guilds.cache.size} Servers!`,
    `Prefix is : ^`,
    `${client.users.cache.size} members`,
  ];
  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    console.log(status);
    client.user.setActivity(status, { type: "WATCHING" }).catch(console.error);
    index++;
  }, 5000); //in ms
});

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "react":
      message.react("🖕🏿");

      break;
  }

  if (message.content.startsWith(prefix)) {
    if (args[0] === "ping") {
      message.reply("pong");
    }
  } else;
  if (message.content === "Salam") {
    message.reply("Salam Azizam :)");
  }
  if (message.content.startsWith(prefix)) {
    if (args[0] === "play") {
      message.reply(
        "Baraye Play dadan mitavind ba zadan help cmd haro bebinid "
      );
    }
  }
  if (message.content.startsWith(prefix)) {
    if (args[0] === "rank") {
      message.reply("∞");
    }
  }
  if (message.content === "Hello ") {
    message.reply("Hello 🖐️ :)");
  }

  if (args[0] === "help") {
    const help = new Discord.MessageEmbed()
      .setTitle("CMDS")
      .addField("Musical Tune", "m!p")
      .addField("hydra", ".")
      .addField("DRM", "*")
      .addField("DRM2", "$")
      .addField("Probot", "#")
      .setThumbnail(
        "https://pbs.twimg.com/profile_images/487518176125517825/iIOW0C72_400x400.jpeg"
      );

    message.channel.send(help);
  }
});

client.login("process.env.token");
