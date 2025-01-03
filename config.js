const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923183599884";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_56_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnZqOFVMbXM2Yy9NMHVhb1Z2Q3lhZUxMekQ1eDBYc0Z1aVAxS29IZ2c0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxODM1OTk4ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQxN0JFMkJGRTA2OTg2MzU0REM5QkRDQUJGNzk0ODkzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTkxOTgxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZRkNuV1BQNlN3R0sxVWlLeEJlNHB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlOWY2YmIwLTUxYTAtNDFiNC04YmM1LThiODJhM2VhZGI1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTk0LFxuICAgICAgNjksXG4gICAgICAxNTksXG4gICAgICAwLFxuICAgICAgMTE3LFxuICAgICAgMTI4LFxuICAgICAgOTAsXG4gICAgICAxNjcsXG4gICAgICAxMixcbiAgICAgIDc5LFxuICAgICAgNyxcbiAgICAgIDIwOCxcbiAgICAgIDUxLFxuICAgICAgMjExLFxuICAgICAgMzksXG4gICAgICAyMTgsXG4gICAgICAxNSxcbiAgICAgIDEyMixcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDE5MSxcbiAgICAgIDc4LFxuICAgICAgMjE2LFxuICAgICAgNjgsXG4gICAgICA1OSxcbiAgICAgIDQ5LFxuICAgICAgMjMsXG4gICAgICAyMTksXG4gICAgICAxODYsXG4gICAgICAxOTAsXG4gICAgICAyMTIsXG4gICAgICAxNzEsXG4gICAgICA1NyxcbiAgICAgIDE2NixcbiAgICAgIDQ1LFxuICAgICAgMTU3LFxuICAgICAgMjA2LFxuICAgICAgNTYsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDdZQlhYTVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE4MzU5OTg4NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItmF24zauiDZhNin2b7YqtuBXCIsXG4gICAgXCJsaWRcIjogXCIyNDQ5MzM4ODE1NTI4OTg6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUER3ekNZUXZwSGd1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIybExqdTd4a3liYzZad3A3L2FuNURnViszd29CMjdCVURyNFdXdGNvOWxrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpCOS9EOGsxclA3UExGRXB5aTdrTnRJdXFaTkk5eVNTVWNlS0UwWlQvZ0NlcWVLWHFtZUdNbktBakx2eEJlYWpwVVJFMmZ1bGxmWUU0VUZtM1FXZ0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJyOTZLcGNFVWtia0hrU2N2SnhTRjNDbDVXZHV1cm0xTVNUejFsS2x2dXdsMUNBZjZrMGlxMXhuOGcrNDBYUERoUTJ6cFRNN240UHg2RUl5eE9QQml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4MzU5OTg4NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkxOTgxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
