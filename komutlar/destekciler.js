const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» zedinc bot pro Komut Sistemleri')
.setTimestamp()
.addField('» Su Ortakcı', 'İLK destekçimiz')
.addField('» Argun Soylu', 'İKİNCİ destekçimiz')
.addField('» Deren Zengin', 'ÜÇÜNCÜ destekçimiz')
.setFooter('© 2021 zedinc bot pro', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'destekçiler',
  description: 'destekçileri gösterir',
  usage: 'destekçiler'
};