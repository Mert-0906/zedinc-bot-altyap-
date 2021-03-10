const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» zedinc bot pro Komut Sistemleri')
.setTimestamp()
.addField('>isminiz', 'sizi betimleyen fotolar veya yazılar')
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
  name: 'ad-isim',
  description: 'ad-isim.',
  usage: 'ad-isim'
};