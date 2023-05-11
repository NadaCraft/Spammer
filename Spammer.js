var spam = [false,"Spam"];

function procCmd(cmd){
var cmd = cmd.split(" ");
if(cmd[0]=="spam"){
preventDefault();
if(!cmd[1]){
clientMessage("Use /spam <message>");
}else if(cmd[1]=="off"){
spam = [false,"Spam"];
clientMessage("Spam disabled");
}else{
spam = [true,cmd.slice(1).join(" ")];}}}

function modTick(){
if(spam[0]){
Server.sendChat(spam[1]);}}
