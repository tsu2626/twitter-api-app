const twitter = require("twitter");
const fs = require("fs");//JSONを読み込んで出力

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8"))); 
const obj = JSON.parse(fs.resdFileSync("timeLine.json", "utf-8"));

for(let i=0;i<20;i++){
  console.log(obj[i].text + "\n");
}