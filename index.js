var Bot = require('slackbots');

// create a bot
var settings = {
    //token: 'xoxb-259706768289-acmU2daEOln7BbPxyy30eI8P',
    token: process.env.BOT_API_KEY,
    name: 'helpy'
};

var bot = new Bot(settings);

bot.on('start', function () {
    console.log("Bot started");
});

bot.on('message', function (data) {

    if (data.type == "message" && data.username != "helpy") {

        var user = data.channel;
        var text = data.text;

        bot.postMessage(user, 'Your message is "' + text + '"');
    }
});