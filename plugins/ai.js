let Bot = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ai');

Bot.addCommand({pattern: 'simi ?(.*)', fromMe: td, desc: Lang.SIMI_DESC}, async (message, match) => {
    try {
      await axios.get(Config.API + '/ai/simi?text=' + match[1] + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*🤖 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE + '\n\n' + e);
    }
});

Bot.addCommand({pattern: 'aco ?(.*)', fromMe: td, desc: Lang.SIMI_DESC}, async (message, match) => {
    try {
      await axios.get(Config.API + '/ai/aco?text=' + match[1] + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*💬 '+ Lang.BOT_DIVIDER + '* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE + '\n\n' + e);
    }
});
