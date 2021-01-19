const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Listo!');
});


let prefix = process.env.PREFIX;

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');

    if (message.content.startsWith(prefix+'ping')){
        message.channel.send('pong');

    } else if (message.content.startsWith(prefix+ 'say')) {
        if (!args) return;
        message.channel.send(args);
    }
});

client.login(TOKEN);

/**
 * CODE OF THE BOT - TheMaestro0
 */

client.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === WelcomeChannel);
    if (!channel) return;
    let role = member.guild.roles.cache.find(role => role.name == AutoRoleName);
    let background = await Canvas.loadImage("https://i.ibb.co/g3yR7pS/welcome.png");
    let avatar = await Canvas.loadImage(
      member.user.displayAvatarURL({ format: "png" })
    );
    let canvas = Canvas.createCanvas(800, 300);
    let ctx = canvas.getContext("2d");
    ctx.patternQuality = "bilinear";
    ctx.filter = "bilinear";
    ctx.antialias = "subpixel";
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.stroke();
    ctx.beginPath();
    ctx.drawImage(background, 0, 0, 800, 300);
    ctx.font = "36px Arial";
    ctx.fontSize = "72px";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(member.user.username, 545, 177);
    ctx.font = "16px Arial Bold";
    ctx.fontSize = "72px";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
    ctx.beginPath();
    ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 36, 21, 260, 260);
    var welcomeMsg = WelcomeMessage.replace("[[user]]", member.user);
    welcomeMsg = welcomeMsg.replace("[[server]]", member.guild.name);
    welcomeMsg = welcomeMsg.replace("[[members]]",member.guild.memberCount);
    let file = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");
    setTimeout(() => {
      channel.send(welcomeMsg, file);
    }, 2000);
    
  if(AutoRole === true){
  if (!role)return console.log("**Couldn't find that role**");
  if (role) return member.roles.add(role);    
  }
  if(DM === true){
  if (DMMessage) return member.send(DMMessage);    
  }else return;  
  });
