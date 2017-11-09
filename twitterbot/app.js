const twitter = require('twitter')
const fs = require('fs')
const json = JSON.parse(fs.readFileSync('./tweets.json', 'utf8'))
const key = JSON.parse(fs.readFileSync('./client.json', 'utf8'))

const interval = 3600000 // 60分
const params = {screen_name: 'nodejs'}

const client = new twitter({
  consumer_key        : key.consumer_key  /* 各自記入 */,
  consumer_secret     : key.consumer_secret /* 各自記入 */,
  access_token_key    : key.access_token_key /* 各自記入 */,
  access_token_secret : key.access_token_secret /* 各自記入 */
})

//jsonからランダムで文字列を選択
function postSelect() {
  let tweetText = json[ Math.floor( Math.random() * json.length )]
  postTweet(tweetText)
}

// 引数の値をTwitterに投稿する
function postTweet(text) {
  client.post('statuses/update',
    {status: text},
    function(error, tweet, response) {
    if (!error) {
      console.log(tweet)
    }
  })
}

setInterval(
  function () {
    postSelect()
  }, interval
);
