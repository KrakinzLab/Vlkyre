`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Kolor = require("chalk");
const git = require("simple-git")();
const exec = require("child_process").exec;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const ʋʟӄʏʀɛքʊʟʟ = async () => {
console.log(Kolor.yellow.bold("💡 𝐈𝐧𝐟𝐨⬰ Checking for updates..."));
await git.fetch();
var newCommits = await git.log(["KryTek..origin/KryTek"]);
if (newCommits.total) {
console.log(Kolor.blue("💡 𝐈𝐧𝐟𝐨⬰ New Update pending, updating..."));
await git.pull("origin", "KryTek", (e, update) => {
require(`child_process`)
.exec("git config --global pull.rebase false")
.stderr.pipe(process.stderr);
if (update && update.summary.changes) {
if (update.files.includes("package.json")) {
exec("npm install").stderr.pipe(process.stderr);
}
console.log(
Kolor.green.bold(`
╔◇║ ⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟
║
║💡 𝐈𝐧𝐟𝐨⬰ Auto-Updated Vlkyre System With Latest Patch...!
╚════════════༻꧂`)
);
} else if (e) {
console.log(Kolor.red.bold("❌ 𝐄𝐫𝐫𝐨𝐫⬰ Please Re-Deploy!"));
console.log(e);
}
});
} else {
console.log(
Kolor.yellow.bold(`
╔◇║ ⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟
║
║💡 𝐈𝐧𝐟𝐨⬰ Vlkyre System Already Synced Latest Patch...!
╚════════════༻꧂`)
);
}
};
module.exports = ʋʟӄʏʀɛքʊʟʟ;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
