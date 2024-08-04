const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349025330616";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_31_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOCxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFbVc3L2VqSlo1VHJGK0s3VVhFeENnV2RjL090RjA3dktNR1ZRTU16TXFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjUzMzA2MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBGN0NGMDE3RkU2NzAzMjNDNDE5NkE5ODgxMzI3MDM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc4OTA2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjUzMzA2MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVGQTM0REMyNEZEQkU5MzQ1QzcyNUZGNTVDQzY4NDhDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc4OTA2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjUzMzA2MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM1RDFBNUM5OTVCQTIxQzJGRjA2QzY0NzkyODI5RTIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc4OTA2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjUzMzA2MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEyREVENTZFQTEyQzU0MkNERjZDQkEyNjE0OUExNzk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc4OTA2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3MDl4bnFhdlFRZS0zT1lycWZ0UFN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImExNTZlNjcyLTBhZmMtNGI2My05MzQyLTQ4MTYxOGFiZGQ0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgMTA4LFxuICAgICAgODgsXG4gICAgICAxMDUsXG4gICAgICA0NCxcbiAgICAgIDExOCxcbiAgICAgIDQyLFxuICAgICAgMSxcbiAgICAgIDE0MixcbiAgICAgIDIxMCxcbiAgICAgIDE4NCxcbiAgICAgIDkxLFxuICAgICAgODYsXG4gICAgICAyMjksXG4gICAgICA2NyxcbiAgICAgIDE3NSxcbiAgICAgIDM5LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTE0LFxuICAgICAgMjQ0LFxuICAgICAgMTI5LFxuICAgICAgNzUsXG4gICAgICAxMzEsXG4gICAgICA5MCxcbiAgICAgIDMwLFxuICAgICAgMjQ1LFxuICAgICAgMTk4LFxuICAgICAgMzAsXG4gICAgICAyMzQsXG4gICAgICAxMTksXG4gICAgICA4MyxcbiAgICAgIDExMixcbiAgICAgIDI0MyxcbiAgICAgIDE1OCxcbiAgICAgIDQ1LFxuICAgICAgNDksXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZMzZONFQ0NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNTMzMDYxNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGFsYWwgRG9sbGFycyBPZmZpY2lhbFwiLFxuICAgIFwibGlkXCI6IFwiMTM1NDEyMjY1Nzg3NDQxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1doeEZVUXY5bSt0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvdWU0UUtzV1VidjI4dHJEZ3QvQitUUVdpNzNYT0huRTltMDhNL2ZySDA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9Lb3ZlUnJPYlMvT0JwU2ZxNEptRVEzMHRjd1dHK0RNbzdKZXpIVlY4dko3UWlJNXBraGxGb3ZvUjZaKzg2eHVSMmZsVHlDOGxRTjdUZUlkWmUvQUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9DbEM2MnVwM2tLYkJzeG84UU9HSXI2VGs3cFlxTVFGNnZOUy9BYkwzaHlZVGJqZUwwTXVHMGVXdXZuWTVIcDNwckx0MFYxU0NFRzJwenROZnhPL0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjUzMzA2MTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzg5MDYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLZDJYa2FpZHBYQ2hCME16dWxsdytpNE9OMndBcEZPREFiNTk0NE5RTzBvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTM3NjM1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNzg5MDYxNzgxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
