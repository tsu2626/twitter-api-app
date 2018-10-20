const twitter = require("twitter");
const fs = require("fs");//JSONを読み込んで出力

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8"))); 

const params = {screen_name: 'watuyo_2',count:5};
  console.log("@" + params.screen_name);
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
  if (!error) {
    console.log(tweets);
    fs.appendFileSync("timeLine.json", JSON.stringify(tweets) + "\n", "utf-8");
  }
});