//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +919366316018
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "089675932606"
global.owner = ["085142136304"]
global.ownername = "🦄YanzCrash"
global.ytname = "YT: https://youtube.com/@si.wannnnn?si=CzlFwsXE15E6ohSY"
global.socialm = "TT: HawWan"
global.location = "Jarta"

global.ownernumber = '089675932606'  //creator number
global.ownername = '🦄YanzCrash' //owner name
global.botname = 'WanBug' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '🦄Wan\n\nContact: +6285142136304'

//console view/theme
global.themeemoji = '🪀'
global.wm = "wan Bot Inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb5ai0bGJP8FukN2EV3F'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` Premium only" Want Premium? Chat Owner`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})