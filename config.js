const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348155715870";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_19_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejFlODN6ODBneURrRVNLeHRqbGlFK0lQUzlFbWhVNGlycGtTM09rVTVLaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTU1NzE1ODcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEN0NGN0VFQzM1QjY5OEU4N0MxMTc5Njc1NTdCRkZFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA1ODIzNjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaG05eThQNzhUVnluMnB4OGRTLTZzUVwiLFxuICBcInBob25lSWRcIjogXCJiZTEwMmE3Ny0zMDM3LTQ3NWItODk1NS00NDk3ODlkNWUzYTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNDYsXG4gICAgICA0NyxcbiAgICAgIDEzNSxcbiAgICAgIDg2LFxuICAgICAgMTQzLFxuICAgICAgOTIsXG4gICAgICAxODYsXG4gICAgICAxMzYsXG4gICAgICA5LFxuICAgICAgNjksXG4gICAgICAxNjIsXG4gICAgICAxOTAsXG4gICAgICAxMjksXG4gICAgICAxNCxcbiAgICAgIDEyNixcbiAgICAgIDExMixcbiAgICAgIDIzMCxcbiAgICAgIDIwNixcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTM5LFxuICAgICAgMTUwLFxuICAgICAgMjI5LFxuICAgICAgMTYsXG4gICAgICAxMDcsXG4gICAgICAyMjUsXG4gICAgICA5NixcbiAgICAgIDY0LFxuICAgICAgMTc3LFxuICAgICAgMjM5LFxuICAgICAgMTI3LFxuICAgICAgMTg0LFxuICAgICAgMjA2LFxuICAgICAgMTgwLFxuICAgICAgMTczLFxuICAgICAgNTMsXG4gICAgICAyMjYsXG4gICAgICAxNyxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktNQks2TjZZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU1NzE1ODcwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFzdGVyIEpvaG5cIixcbiAgICBcImxpZFwiOiBcIjkwNDg2NjU2MjYyMzg2OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iQWlxMEZFTk91bXJrR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1RQM0FiTUd1aTljU2p1Z1hsM3R1aGVxaGpXYzZyVmYycmpRTUl2RkkzQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2b2gyMUxsUndtNFdZRjdydUVPQS9TZnR3YllsWkNubHZ3bnNSaXZpKzltNzhwdElKL0hicFFuaVRweHhwZ1VidUdjSE85UzBUUC9OSTRvbTBLK0FEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIMEFud2NVTXVEaDVpODlvdXdtbUtsYXhJNHV2V0VkSEIrRSt5U2Z6NCsvcXQ0WkU1bUJaTS85VzhmRmM3Vmp0LzZtZVEwSkxWV1dUTjZnL0JTdHhndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTU1NzE1ODcwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1ODIzNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBWnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFadS5qc29uIjogIntcImtleURhdGFcIjpcIno5UUxoZDdTTytXUFNEeVJNc1VVdzBQOVlVa0FzUUUyRnA3M2JtVm4za0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzNjcyMTIzNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyODkxNjYwMDcwMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "Master John" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
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
