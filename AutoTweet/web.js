function doGet(e) {
  if(e.parameter.change=='ok'){
    var sheet= SpreadsheetApp.openById('1o6oPQ3wCB2MCc9zc8U3eHKKSfNc5HDdqGji_YFqf2XY').getSheetByName("ActList"); //フォームの解答シート取得
  var sheetmax=sheet.getLastRow();
   debugroll(sheetmax);
  }else{
  var htmloutput = HtmlService.createTemplateFromFile('AutoTweet\\DiceRollTweet').evaluate();
    htmloutput.setTitle('猫さんの遊び場').addMetaTag('viewport', 'width=device-width, initial-scale=1');
    return htmloutput;
  }
}
