var script = FileStream.read('sdcard/msgbot/script2.js');  
var path = 'sdcard/msgbot/'; 
 
var botPath = path + 'Bots/'; 
for(var i=0; i<3; i++) { 
var ran = Math.floor(Math.random() * 89999999999) + 10000000000; 
var scriptPath = botPath + ran + "/";
FileStream.write(scriptPath + "b.js",script); 
FileStream.write(scriptPath + "module/r.r","a"); 
FileStream.remove(scriptPath + "module/r,r"); 
FileStream.write(scriptPath + "bot.json",JSON.stringify({main: "b.js", option: {"apiLevel": 1, "useUnifiedParams": false, "useBabel": false, "scriptPower": true}},null,2));
 }
