const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» zedinc bot pro Komut Sistemleri')
.setTimestamp()
.addField('»-ban', 'kişiyi yasaklar') 
.addField('»-davet', 'davet linkine götürür')
.addField('»-kick', 'kişiyi kısıtlar')
.addField('»-oylama', 'oylama başlatır')
.addField('»-kullanıcıbilgi', 'kişiyi betimler')
.addField('»-sunucubilgi', 'sunucuyu betimler')
.addField('»-yetkilerim', 'yetkilerinizi gösterir')
.addField('»-destekçiler', 'destekçileri gösterir')
.addField('»-ad-isim', 'size özel komutlar')
.addField('»-küfür aç.kapat', 'küfür koruma açıp kapar')
.addField('»-i', 'istatistik')
.addField('»-reklam-engel aç.kapat', 'reklam engel açıp kapar')
.addField('»-sil ', 'mesajları siler')
.setFooter('©pat2021 zedinc bot pro', client.user.avatarURL())
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};