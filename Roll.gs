function roll(max,min,keta){
  //Math.random() * ( 最大値 - 最小値 ) + 最小値;
  var ran=Math.floor(Math.random()*((max+1)-min)+min);
  if(keta==10){
    ran=ran/10*10;
  }else if(keta==66){
   ran=(Math.floor(Math.random()*((max+1)-min)+min)*10)+ran; 
  }
  return ran;
}

function setdice(val,check,number,dicetype,correction){
  var keta=1;
  var min=1;
  var max,result,decision,ran,sum=0,str="";
  switch(dicetype){
    case "d4":
      max=4;
      break;
    case "d6":
      max=6;
      break;
    case "d8":
      max=8;
      break;
    case "d10":
      max=10;
      break;
    case "d12":
      max=12;
      break;
    case "d20":
      max=20;
      break;
    case "d24":
      max=24;
      break;
    case "d30":
      max=30;
      break;
    case "d50":
      max=50;
      break;
    case "d60":
      max=60;
      break;
    case "d66":
      keta=66;
      max=6;
      break;
    case "d100":
      max=100;
      break;
    case "Tens d10":
      keta=10;
      min=10;
      max=100;
      break;
    default:
      max=100;
      break;
  }
  for(var i=0;i<number;i++){
    ran=roll(max,min,keta)+correction;
    if(ran<1)
      ran=1;
    sum+=ran;
    str+=ran+",";
    if(check=="ダイスの値以下"){
      if(sum<=val){
        decision=true;
      }else{
        decision=false;
      }
    }else{
      if(sum>=val){
        decision=true;
      }else{
        decision=false;
      }
    }      
  }
  if(decision==true){
      decision="成功";
  }else{
      decision="失敗";
  }
  result=[str,sum,decision];
  return result;
}