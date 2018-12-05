function doGet() {
  var htmloutput = HtmlService.createTemplateFromFile('AutoTweet\\DiceRollTweet').evaluate();
    htmloutput.setTitle('猫さんの遊び場').addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return htmloutput;
}
