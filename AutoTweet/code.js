var twitter = TwitterWebService.getInstance(
  'u3LAsOHRrMysWBar90SDnPAIG',       // 作成したアプリケーションのConsumer Key
  'OGk59TM3r78xA5iF30kyLlg2c1mTksyR3MXMnODPUJAcfsrK6J'  // 作成したアプリケーションのConsumer Secret
);

// 認証
function authorize() {
  twitter.authorize();
}

// 認証解除
function reset() {
  twitter.reset();
}

// 認証後のコールバック
function authCallback(request) {
  return twitter.authCallback(request);
}

// ツイートを投稿
function postUpdateStatus(str) {
  var service  = twitter.getService();
  var response = service.fetch('https://api.twitter.com/1.1/statuses/update.json', {
    method: 'post',
    payload: { status: str }
  });
}

function getSheet(type,num){
    var sheet= SpreadsheetApp.openById('1o6oPQ3wCB2MCc9zc8U3eHKKSfNc5HDdqGji_YFqf2XY').getSheetByName("ActList"); //フォームの解答シート取得
  var act;
  if(type=="ran"){
    var sheetmax=sheet.getLastRow();
    var ran=Math.floor(Math.random()*((sheetmax)-2)+2);
    act=sheet.getRange(ran,2,1,7).getValues();
  }else if(type=="check"){
    act=sheet.getRange(num,2,1,7).getValues();
  }
  return act;
}

function randomroll(){
  var act=getSheet("ran",0);
  var result=setdice(act[0][2],act[0][3],act[0][4],act[0][5],act[0][6]);
  var str=act[0][0]+"は、"+act[0][1]+"【成功値："+act[0][2]+" 補正値："+act[0][6]+"】をする為に"+act[0][4]+act[0][5]+"をロールした。\n";
  if(act[0][4]==1){
    str+="結果は、"+result[1]+"で"+result[2]+"です。";
  }else{
    str+="結果は、"+result[0]+"合計は"+result[1]+"で"+result[2]+"です。";
  }
  str+="\nby 手作り自動Roll＆Tweetbot";
  Logger.log(str);
  postUpdateStatus(str);
}

function debugroll(num){
  var act=getSheet("check",num);
  num=num-0;
  var result=setdice(act[0][2],act[0][3],act[0][4],act[0][5],act[0][6]+0);
  var str=act[0][0]+"は、"+act[0][1]+"【成功値："+act[0][2]+" 補正値："+act[0][6]+"】をする為に"+act[0][4]+act[0][5]+"をロールした。\n";
  if(act[0][4]==1){
    str+="結果は、"+result[1]+"で"+result[2]+"です。";
  }else{
    str+="結果は、"+result[0]+"合計は"+result[1]+"で"+result[2]+"です。";
  }
  str+="\nby 手作り自動Roll＆Tweetbot(番号指定版)";
  Logger.log(str);
  postUpdateStatus(str);
}
