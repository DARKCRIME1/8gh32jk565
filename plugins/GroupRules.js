const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'rules', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/805825f1e0f5c45619aec.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      🍁╔ GROUP RULES ╗🍁\n\n' + Config.RULES + '\n\n\n       ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'rules', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/805825f1e0f5c45619aec.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      🍁╔ GROUP RULES ╗🍁\n\n' + Config.RULES + '\n\n\n      ❰❤️DATA THIEVES SYSTEM❤️❱   '})

    }));
  
  Amdi.applyCMD({pattern: 'rules', fromMe: false,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/805825f1e0f5c45619aec.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      🍁╔ GROUP RULES ╗🍁\n\n' + Config.RULES + '\n\n\n      ❰❤️DATA THIEVES SYSTEM❤️❱   '  ,quoted: message.data})

    }));
}
                  
                  
