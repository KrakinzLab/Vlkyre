`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const BanGroup = require(`../ᴠʟᴋʏʀᴇ🥠ᴘᴏʀᴛ/ban`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const vers = require(`../package.json`);
const Ping = Pong.toFixed(4) * 60;
const date = require(`date-and-time`);
const now = new Date();
const cleanRF = require(`./cleanRF`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const fs = require(`fs`);
var Flower = [`💐`, `🌻`, `🌼`, `🌹`, `🌸`, `💮`];
var People = [`👮`, `👳`, `🤱`, `🤰`, `💂`];
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
exports.welbuts = async (
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
GroupID,
GroupMemData,
GroupMemG,
GroupMemBio,
MemNum,
Message
) => {
try {
BanGroup.findOne(
{
ID: GroupID,
},
async (e, BanGroup) => {
if (e) return console.log(e);
if (BanGroup) return;
const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
const PeopleWel = People[Math.floor(Math.random() * People.length)];
var ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.split("@")[0].replace(/[+ ]/g, "");
let 𝕻𝕻𝖑𝖊𝖙𝖊𝖗;
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.getProfilePicture(
`${MemNum.split(`@`)[0]}@c.us`
);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 =
"https://i.postimg.cc/wxWL9G8F/no-profile-picture-300x216.png";
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐕𝐥𝐤𝐲𝐫𝐞(𝐜) |════════════════════════════════════════════⬡|`;
const downloader = await new Downloader({
url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
directory: `./`,
fileName: `${Date.now().toString()}.png`,
cloneFiles: false,
});
try {
await downloader.download();
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
GroupID,
fs.readFileSync(`./${Date.now().toString()}.png`),
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
GroupID,
{
contentText: `❣️𝗠𝗲𝗻𝘁𝗶𝗼𝗻: @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}
꧁༺◇══════════════◇༻꧂
🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞🥞
꧁༺◇══════════════◇༻꧂

╔════◇
║
║${FlowerWel} 𝗕𝗶𝗼: ${GroupMemBio.status}
║${PeopleWel} 𝐌𝐞𝐦𝐛𝐞𝐫𝐳: ${GroupMemG}
║🎪 𝐆𝐫𝐨𝐮𝐩: ${GroupMemData.subject}
╚════════════༻꧂

${Message}`,
footerText: `❮ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ${vers.vers} ❯\n❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}faq`,
buttonText: { displayText: `${ᴋᴇɪ}faq` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
contextInfo: { mentionedJid: [MemNum] },
}
)
.catch((e) => console.log(e));
return await cleanRF.cleanRF(`./${Date.now().toString()}.png`);
} catch (e) {
const media = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.prepareMessage(
GroupID,
{ url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 },
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.sendMessage(
GroupID,
{
contentText: `🪶 𝐇𝐞𝐲: @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}
╔◇══════════════◇༻꧂
┊  🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫🥞
╚◇║
╔◇║
║${FlowerWel} 𝗕𝗶𝗼: ${GroupMemBio.status}
║${PeopleWel} 𝐌𝐞𝐦𝐛𝐞𝐫𝐳: ${GroupMemG}
║🎪 𝐆𝐫𝐨𝐮𝐩: ${GroupMemData.subject}
╚════════════༻꧂

${Message}

👇🏽𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀👇🏽`,
footerText: `❮ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ${vers.vers} ❯\n❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
{
buttonId: `${ᴋᴇɪ}faq`,
buttonText: { displayText: `${ᴋᴇɪ}faq` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
contextInfo: { mentionedJid: [MemNum] },
}
)
.catch((e) => console.log(e));
}
}
);
} catch (e) {
console.log(e);
}
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
