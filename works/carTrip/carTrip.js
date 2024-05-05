const pyLoad=document.getElementById('pyLoad');
const dspMap=document.getElementById('dspMap');
var isLoad=false;

if(isLoad==false){
  const b=document.createElement('b');
  b.classList.add("nowLoading");
  b.textContent='NOW LOADING...';
  pyLoad.appendChild(b);
  
}
addEventListener('py:ready', () => {
  isLoad=true;
  pyLoad.remove()
  const img=document.createElement('img');
  img.setAttribute("id","ja_map");
  img.setAttribute("src","../../material/ja_map.png");
  dspMap.appendChild(img);
});
const dispNow=document.getElementById('dispNow');
const funds=document.getElementById('funds');
const mileageAll=document.getElementById('mileageAll');
const carOfNow=document.getElementById('carOfNow');
const nextReq=document.getElementById('nextReq');
const gasRrice=document.getElementById('gasRrice');
const calcMoney=document.getElementById('calcMoney');
const gameMsg=document.getElementById('gameMsg');
const canvas=document.getElementById('canvas');
const mlp=document.getElementById('mlp');
const newGraph=document.getElementById('newGraph');
const goToArea=document.getElementById('goToArea');
const dispNum=document.getElementById('dispNum');
const monitor=document.getElementById('monitor');

const carIdList=['ponkotu','jimuniy','supersia','hasurer','wagonr','tanto','aqua','aruphard','velfair','voxcy','bulown','cienta','noa','hiaes','haryar','pulius','rundculuzer','nbox','sibick','steowagon','fit','fureed','skyline','serena','nprto','fealedyz','derikad5','xrostreck','cx5','ab'];
const carList=[
  ['ポンコツ車(買い替え推奨)',7.22,27,20,161],
  ['スズキ ジムニー',12.62,40,200,161],
  ['スズキ スペーシア',18.01,27,160,161],
  ['スズキ ハスラー',19.26,27,170,161],
  ['スズキ ワゴンR',14.72,27,130,161],
  ['ダイハツ タント',16.24,30,180,161],
  ['トヨタ アクア',23.35,36,250,161],
  ['トヨタ アルファード',9.66,75,640,161],
  ['トヨタ ヴェルファイア',8.77,75,700,161],
  ['トヨタ ヴォクシー',12.66,52,360,161],
  ['トヨタ クラウン',8.99,55,550,173],
  ['トヨタ シエンタ',13.79,40,280,161],
  ['トヨタ ノア',9.95,52,350,161],
  ['トヨタ ハイエース',9.88,70,320,138],
  ['トヨタ ハリアー',11.64,55,400,161],
  ['トヨタ プリウス',22.68,43,370,161],
  ['トヨタ ランドクルーザー',9.35,87,600,173],
  ['ホンダ N-BOX',16.71,27,200,161],
  ['ホンダ シビック',14.56,40,350,173],
  ['ホンダ ステップワゴン',10.74,52,360,161],
  ['ホンダ フィット',20.05,40,240,161],
  ['ホンダ フリード',14.51,36,290,161],
  ['日産 スカイライン',10.32,70,510,173],
  ['日産 セレナ',12.02,55,330,161],
  ['日産 ノート',16.88,36,230,161],
  ['日産 フェアレディZ',7.5,62,620,173],
  ['三菱 デリカD:5',9.25,64,440,138],
  ['スバル クロストレック',12.12,48,300,161],
  ['Mazda CX-5',13.87,56,330,138],
  ['アウディA8',7.32,64,1400,173]];
const wayList=['shitamichi','highway']
const mapIdList=['hokkaido','aomori','iwate','miyagi','akita','yamagata','hukusima','ibaraki','tochigi','gunma','saitama','chiba','tokyo','kanagawa','yamanashi','nagano','nigata','toyama','ishikawa','hukui','gihu','sizuoka','aichi','mie','shiga','kyoto','osaka','hyogo','nara','wakayama','tottori','shimane','okayama','hiroshima','yamaguchi','tokushima','kagawa','aichi','kochi','hukuoka','saga','nagasaki','kumamoto','oita','miyazaki','kagoshima','okinawa'];
const mapList=[
  ['北海道',1360,1700,0],
  ['青森県',1402,1402,1],
  ['岩手県',1530,1275,1],
  ['宮城県',1487,1105,1],
  ['秋田県',1343,1275,1],
  ['山形県',1360,1105,1],
  ['福島県',1445,977,1],
  ['茨城県',1445,850,1],
  ['栃木県',1360,892,1],
  ['群馬県',1275,850,1],
  ['埼玉県',1292,799,1],
  ['千葉県',1402,739,1],
  ['東京都',1343,765,1],
  ['神奈川',1309,714,1],
  ['山梨県',1207,765,1],
  ['長野県',1147,850,1],
  ['新潟県',1232,1020,1],
  ['富山県',1088,918,1],
  ['石川県',977,935,1],
  ['福井県',935,850,1],
  ['岐阜県',1037,807,1],
  ['静岡県',1232,680,1],
  ['愛知県',1062,680,1],
  ['三重県',977,595,1],
  ['滋賀県',952,765,1],
  ['京都府',892,765,1],
  ['大阪府',850,680,1],
  ['兵庫県',807,722,1],
  ['奈良県',905,610,1],
  ['和歌山',850,552,1],
  ['鳥取県',680,807,1],
  ['島根県',510,765,1],
  ['岡山県',680,722,1],
  ['広島県',552,680,1],
  ['山口県',425,680,1],
  ['徳島県',765,552,2],
  ['香川県',680,637,2],
  ['愛媛県',552,552,2],
  ['高知県',637,510,2],
  ['福岡県',340,595,3],
  ['佐賀県',255,595,3],
  ['長崎県',212,510,3],
  ['熊本県',340,467,3],
  ['大分県',425,510,3],
  ['宮崎県',425,425,3],
  ['鹿児島',340,340,3],
  ['沖縄県',170,127,4]];
var mapNo=26;

var isSet=true;
var isDriving=false;
var isStop=true;
var isGameOver=false;
var notice='お待ちください...';

var whatDay=1;
var whatHour=8;
var whatMinute=0;
var whereNow=0;
var moneyNow=2000000;
var milage=0;
var myCar=0;
var nextGoal=22;
var highOctane=171;
var regular=158;
var lightOil=138;
var carSelect=1;
var amountRemai=0;

var meansRute=0;
var destination=22;
var lessGas=0;
var moveX=0;
var moveY=0;
var moveSpeed=0;
var movingDistance=0;
var movingTime=0;
var toll=0;
var NumberOfTimes=0;

var plusPop=0;

var pyX=850;
var pyY=680;
var py_yen=2;
var py_hp=100;
var py_pop=2;
var py_spd=0;
var py_gas=50;

var gasNow=13.5;
var howLong=212;
var reward=71200;
var spdNow=0;

var bop=0;

var rate=8800;

var gasNow=13.5;
var nextMileage=200;

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
function okGo(){
  isStop=false;
  notice='車旅！CarTuber！';
  if(gameCheck()){
    return 'end';
  }
  updateDisplay();
}
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
$(document).ready( function(){
  if(isSet){
    isSet=false;
    if(window.sessionStorage.getItem(['dspID'])=='チート'){
      moneyNow=20000000;
      py_yen=20;
    }
    gameMsg.textContent=notice;
    dispNow.textContent=whatDay+'日目 '+( '00' + whatHour ).slice( -2 )+':'+( '00' + whatMinute ).slice( -2 )+' '+mapList[mapNo][0];
    funds.textContent='資金：'+Math.floor(moneyNow/10000)+'万'+( '0000' + moneyNow ).slice( -4 )+'円';
    mileageAll.textContent='車旅：'+Math.floor(milage)+'km';
    carOfNow.textContent='@'+carList[myCar][0];
    nextReq.textContent='NEXT講演地：'+mapList[nextGoal][0];
    gasRrice.textContent='H '+highOctane+' R '+regular+' K '+lightOil;
    calcMoney.textContent='購入後＞'+(moneyNow-carList[carSelect][3]*10000+carList[myCar][3]*rate)+'円';
    dispNum.textContent='spd:'+( '___' + py_spd ).slice( -3 )+' gas:'+( '___' + py_gas ).slice( -3 )+' HP:'+( '___' + py_hp ).slice( -3 )+' yen:'+( '___' + py_yen ).slice( -3 )+'百万円 pop:'+( '___' + py_pop ).slice( -3 );
  }
  }
);
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□画面表示処理
function updateDisplay(){
  py_gas=Math.floor(gasNow/carList[myCar][2]*100);
  py_yen=Math.floor(moneyNow/1000000);
  py_pop=Math.floor(carList[myCar][3]/10+plusPop);
  if(py_pop>100){py_pop=100;}

  gameMsg.textContent=notice;
  if(isDriving){
    dispNow.textContent=whatDay+'日目 '+( '00' + whatHour ).slice( -2 )+':'+( '00' + whatMinute ).slice( -2 )+' 移動中';
  }else{
    dispNow.textContent=whatDay+'日目 '+( '00' + whatHour ).slice( -2 )+':'+( '00' + whatMinute ).slice( -2 )+' '+mapList[mapNo][0];
  }
  funds.textContent='資金：'+Math.floor(moneyNow/10000)+'万'+( '0000' + moneyNow ).slice( -4 )+'円';
  mileageAll.textContent='車旅：'+Math.floor(milage)+'km';
  carOfNow.textContent='@'+carList[myCar][0];
  if(nextGoal==mapNo && isDriving == false){
    nextReq.innerHTML='講演ボタン ＞<input type="button" class="diplomataSC carNav" id="pushButton" value="PUSH" onclick="giveALecture()">';
  }else{
    nextReq.textContent='NEXT講演地：'+mapList[nextGoal][0];
  }
  gasRrice.textContent='H '+highOctane+' R '+regular+' K '+lightOil;
  calcMoney.textContent='購入後＞'+(moneyNow-carList[carSelect][3]*10000+carList[myCar][3]*rate)+'円';
  dispNum.textContent='spd:'+( '___' + py_spd ).slice( -3 )+' gas:'+( '___' + py_gas ).slice( -3 )+' HP:'+( '___' + py_hp ).slice( -3 )+' yen:'+( '___' + py_yen ).slice( -3 )+'百万円 pop:'+( '___' + py_pop ).slice( -3 );
  canvas.innerHTML = '';
  mlp.innerHTML = '';
  newGraph.click();
}
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
function giveALecture(){
  if(isDriving||isStop){return;}
  isStop=true;
  monitor.innerHTML='<video src="../../material/thankyou2.mp4" id="animation" loop muted autoplay playsinline></video>';
  notice='講演スタート';
  updateDisplay();

  bop=nextMileage*100+50000;
  bop+=carList[myCar][3]*100;
  bop+=Math.floor(milage/10);
  bop+=plusPop*300;
  bop=Math.floor(bop*py_pop/100);
  moneyNow+=bop;


  
  for(let i=1;i<=20;i++){
    setTimeout(function(){
      whatMinute+=12;
      py_hp-=1;
      if(whatMinute>=60){
        whatMinute=0;
        whatHour+=1;
        if(whatHour>=24){
          whatHour=0;
          whatDay+=1;
          oilFluctuation();
        }
      }
      let timeIsMoney=Math.floor( Math.random() * 3 ) * 1000 + carList[myCar][3] * 10 + Math.floor(milage/100);
      bop+=timeIsMoney;
      moneyNow+=timeIsMoney;

          
      if(whatHour==12&&whatMinute==0){
        let restPrice=Math.floor( Math.random() * 25 )*Math.floor( Math.random() * 5 )*10+250+carList[myCar][3]/2;
        bop-=restPrice;
        moneyNow-=restPrice;
        py_hp+=14;
        if(py_hp>100){py_hp=100;}
      }
      if(whatHour==19&&whatMinute==0){
        let restPrice=Math.floor( Math.random() * 40 )*Math.floor( Math.random() * 5 )*10+500+carList[myCar][3]/2;
        bop-=restPrice;
        moneyNow-=restPrice;
        py_hp+=15;
        if(py_hp>100){py_hp=100;}
      }
      if(whatHour==0&&whatMinute==0){
        let restPrice=Math.floor( Math.random() * 100 )*Math.floor( Math.random() * 50 )*10+1500+carList[myCar][3]*5;
        bop-=restPrice;
        moneyNow-=restPrice;
      }
      if(whatHour==7&&whatMinute==0){
        let restPrice=Math.floor( Math.random() * 20 )*Math.floor( Math.random() * 5 )*10+150+carList[myCar][3]/2;
        bop-=restPrice;
        moneyNow-=restPrice;
        py_hp+=5;
        if(py_hp>100){py_hp=100;}
      }
      let chance1=Math.floor( Math.random() * 100 ) * Math.floor( Math.random() * 100 ) * Math.floor( Math.random() * 100 ) -700000;
      if(chance1>0 && whatHour >8 ){
        bop+=Math.floor(chance1*py_pop/100);
        moneyNow+=Math.floor(chance1*py_pop/100);
        plusPop+=2;
      }
      if(whatMinute==0 && whatHour >8 ){
        let chance2=Math.floor( Math.random() * 1800 )*10-8500;
        bop+=chance2+carList[myCar][3]*5;
        moneyNow+=chance2+carList[myCar][3]*5;
        if(chance2>0){
          plusPop+=1;
        }
      }
      if(plusPop>100){plusPop=100;}



      notice='収支 +'+bop+'円';
      if(i==20){
        monitor.innerHTML='<video poster="../../material/drive2.jpg" id="animation" loop muted autoplay playsinline></video>';
        nextGoal=Math.floor( Math.random() * 47 );
        notice='次の目的地は'+mapList[nextGoal][0]+'です';
        moveX= mapList[nextGoal][1] - mapList[mapNo][1];
        moveY= mapList[nextGoal][2] - mapList[mapNo][2];
        nextMileage=Math.floor(( moveX ** 2 + moveY ** 2 ) ** 0.5);
        isStop=false;
      }
      if(gameCheck()){
        return 'end';
      }
      updateDisplay();

    }, 550*i);
  }

}
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
function gameCheck(){
  if(moneyNow<=0||gasNow<=0||py_hp<=0){
    isStop=true;
    if(moneyNow<=0){
      notice='お金が無くなり引退';
    }
    if(gasNow<=0){
      notice='ガス欠でリタイヤ';
    }
    if(py_hp<=0){
      notice='体力の限界で引退';
    }
    if(isGameOver==false){
      monitor.innerHTML='<img src="../../material/gameover.jpg" id="animation">';
      setTimeout(function(){
        updateDisplay();
      }, 500);
    }
    isGameOver=true;
    // const animation=document.getElementById('animation');
    // animation.innerHTML='<source src="../../material/gameover.mp4" type="video/mp4" id="playVideo">';
    
    
    return true;
  }
  return false;
}
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞運転開始ボタン
function goDrive(){
  if(isDriving||isStop){return;}

  const waySelect=document.getElementById('waySelect');
  meansRute=wayList.indexOf(waySelect.value);//0=下道 1=高速
  const pref=document.getElementById('pref');
  destination=mapIdList.indexOf(pref.value);//目的地のマップナンバー

  if(meansRute==0 && mapList[mapNo][3]!=mapList[destination][3]){
    notice='！下道では行けません';
    updateDisplay();
    return;
  }
  if(destination == mapNo){
    notice='！目的地をセットして下さい';
    updateDisplay();
    return;
  }
  
  const animation=document.getElementById('animation');
  animation.innerHTML='<source src="../../material/drive.mp4" type="video/mp4" id="playVideo">';
  
  isDriving=true;
  notice='運転中';
  
  moveX= mapList[destination][1] - mapList[mapNo][1];
  moveY= mapList[destination][2] - mapList[mapNo][2];
  movingDistance=Math.floor(( moveX ** 2 + moveY ** 2 ) ** 0.5);//目的地までの距離

  lessGas= movingDistance / carList[myCar][1];//一旦、総使用燃料、あとで時間で割る。

  if(meansRute==0){
    moveSpeed= 40 + Math.floor(Math.random() * 18);//下道移動速度
    toll=0;
  }else{
    moveSpeed= 67 + Math.floor(Math.random() * 25);//高速移動速度
    toll= moveSpeed * 4 ;                          //通行料(12分単位)
  }

  movingTime = Math.floor( movingDistance / moveSpeed * 5 );//時間（単位12分）


  lessGas = lessGas / movingTime;//消費燃料（12分単位）
  NumberOfTimes=movingTime;

  
  if(whatHour<12 && whatHour * 5 + NumberOfTimes ==58){
    NumberOfTimes += 1;
  }
  if(whatHour<19 && whatHour * 5 + NumberOfTimes ==93){
    NumberOfTimes += 1;
  }
  if(whatHour<24 && whatHour * 5 + NumberOfTimes ==118){
    NumberOfTimes += 1;
  }
  if(whatHour<12 && whatHour * 5 + NumberOfTimes ==59){
    NumberOfTimes += 1;
  }
  if(whatHour<19 && whatHour * 5 + NumberOfTimes ==94){
    NumberOfTimes += 1;
  }
  if(whatHour<24 && whatHour * 5 + NumberOfTimes ==119){
    NumberOfTimes += 1;
  }
  if(whatHour<12 && whatHour * 5 + NumberOfTimes >=60){
    NumberOfTimes += 3;
  }
  if(whatHour<19 && whatHour * 5 + NumberOfTimes >=95){
    NumberOfTimes += 3;
  }
  if(whatHour<24 && whatHour * 5 + NumberOfTimes >=120){
    NumberOfTimes += 40;
  }
  
  for(let i=0;i<NumberOfTimes;i++){
    setTimeout(function(){
      
      if(gameCheck()){
        return 'end';
      }
      drive12m(i);
    }, 350*i+10);
  }
  
}

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞運転12分処理
function drive12m(i){

  whatMinute+=12;
  if(whatMinute>=60){
    py_hp-=1;
    whatMinute=0;
    whatHour+=1;
    if(whatHour>=24){
      whatHour=0;
      whatDay+=1;
      oilFluctuation();
    }
  }
  if(whatHour==12&&whatMinute==0){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
    let restPrice=Math.floor( Math.random() * 25 )*Math.floor( Math.random() * 5 )*10+250+carList[myCar][3]/2;
    notice='昼食：'+restPrice+'円';
    moneyNow-=restPrice;
    py_hp+=14;
    if(py_hp>100){py_hp=100;}
    
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;

  }else if((whatHour==12&&whatMinute==12)||(whatHour==12&&whatMinute==24)){
    py_spd=0;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour==12&&whatMinute==36){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour==12&&whatMinute==48){
    py_spd=moveSpeed;
    pyX += moveX / movingTime;
    pyY += moveY / movingTime;
    moneyNow -= toll;
    gasNow -= lessGas;
    py_hp -=2;
    milage+=(movingDistance/movingTime);

    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }
  if(whatHour==19&&whatMinute==0){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
    let restPrice=Math.floor( Math.random() * 40 )*Math.floor( Math.random() * 5 )*10+500+carList[myCar][3]/2;
    notice='夕食：'+restPrice+'円';
    moneyNow-=restPrice;
    py_hp+=14;
    if(py_hp>100){py_hp=100;}
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if((whatHour==19&&whatMinute==12)||(whatHour==12&&whatMinute==24)){
    py_spd=0;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour==19&&whatMinute==36){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour==19&&whatMinute==48){
    py_spd=moveSpeed;
    pyX += moveX / movingTime;
    pyY += moveY / movingTime;
    moneyNow -= toll;
    gasNow -= lessGas;
    py_hp -=2;
    milage+=(movingDistance/movingTime);

    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }
  if(whatHour==0&&whatMinute==0){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
    let restPrice=Math.floor( Math.random() * 100 )*Math.floor( Math.random() * 50 )*10+1500+carList[myCar][3]*5;
    notice='宿泊：'+restPrice+'円';
    moneyNow-=restPrice;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour<8){
    py_hp+=1;
    if(py_hp>100){py_hp=100;}
    py_spd=0;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour==8&&whatMinute==0){
    if(whatHour==7&&whatMinute==0){
      let restPrice=Math.floor( Math.random() * 20 )*Math.floor( Math.random() * 5 )*10+150+carList[myCar][3]/2;
      notice='朝食：'+restPrice+'円';
      moneyNow-=restPrice;
      py_hp+=5;
      if(py_hp>100){py_hp=100;}
    }
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }else if(whatHour==8&&whatMinute==12){
    py_spd=moveSpeed;
    pyX += moveX / movingTime;
    pyY += moveY / movingTime;
    moneyNow -= toll;
    gasNow -= lessGas;
    py_hp -=2;
    milage+=(movingDistance/movingTime);

    if(gameCheck()){
      return 'end';
    }
    updateDisplay();
    roadside(i);
    return;
  }
  notice='運転中';
  if(i==0){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
  }else if(i==NumberOfTimes-2){
    py_spd=moveSpeed/2;
    pyX += (moveX / movingTime)/2;
    pyY += (moveY / movingTime)/2;
    moneyNow -= toll/2;
    gasNow -= lessGas/2;
    py_hp -=1;
    milage+=(movingDistance/movingTime)/2;
  }else if(i==NumberOfTimes-1){
    py_spd=0;
    isDriving=false;
    animation.remove();
    const video=document.createElement('video');
    video.setAttribute('poster', "../../material/drive2.jpg");
    video.setAttribute('loop',"");
    video.setAttribute('muted',"");
    video.setAttribute('autoplay',"");
    video.setAttribute('playsinline',"");
    video.id="animation";
    monitor.appendChild(video);
    notice='到着しました';
    oilFluctuation();//燃料費の変動
    mapNo = destination; //現在地IDに目的地IDを代入（到着処理）
    pyX = mapList[mapNo][1];//pyX pyYをマッチ
    pyY = mapList[mapNo][2];
  }else{
    py_spd=moveSpeed;
    pyX += moveX / movingTime;
    pyY += moveY / movingTime;
    moneyNow -= toll;
    gasNow -= lessGas;
    py_hp -=2;
    milage+=(movingDistance/movingTime);
  }
  if(gameCheck()){
    return 'end';
  }
  
  updateDisplay();
}

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞食事と目的地の調整
function roadside(i){
  
  if(i==NumberOfTimes-1){
    py_spd=0;
    isDriving=false;
    animation.remove();
    const video=document.createElement('video');
    video.setAttribute('poster', "../../material/drive2.jpg");
    video.setAttribute('loop',"");
    video.setAttribute('muted',"");
    video.setAttribute('autoplay',"");
    video.setAttribute('playsinline',"");
    video.id="animation";
    monitor.appendChild(video);
    notice='到着しました';
    oilFluctuation();//燃料費の変動
    mapNo = destination; //現在地IDに目的地IDを代入（到着処理）
    pyX = mapList[mapNo][1];//pyX pyYをマッチ
    pyY = mapList[mapNo][2];
    setTimeout(function(){
      
      if(gameCheck()){
        return 'end';
      }
      updateDisplay();

    }, 350);
    return;
  }else{
    return;
  }
}

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞購入ボタン
function buyButton(){
  if(isDriving||isStop){return;}
  notice='購入';
  const carPulDown=document.getElementById('carPulDown');
  carSelect=carIdList.indexOf(carPulDown.value);
  if(moneyNow-carList[carSelect][3]*10000+carList[myCar][3]*rate<0){
    notice='お金が足りません';
    updateDisplay();
    return 'NG';
  }
  moneyNow=moneyNow-carList[carSelect][3]*10000+carList[myCar][3]*rate;
  myCar=carSelect;
  if(carList[myCar][2]<gasNow){
    gasNow=carList[myCar][2];
  }
  if(gameCheck()){
    return 'end';
  }
  updateDisplay();
}
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞計算ボタン
function calcBuy(){
  if(isDriving||isStop){return;}
  const carPulDown=document.getElementById('carPulDown');
  carSelect=carIdList.indexOf(carPulDown.value);
  notice='新車価格'+carList[carSelect][3]+'万円';
  if(gameCheck()){
    return 'end';
  }
  updateDisplay();
}


//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞休むボタン処理
function goToBed(){
  if(isDriving||isStop){return;}
  notice='翌日まで休みます';
  isStop=true;
  let until=(31-whatHour)*5+(60-whatMinute)/12;

  for(let i=0;i<until;i++){
    setTimeout(function(){
      if(gameCheck()){
        return 'end';
      }
      rest();
      if(whatHour==8 && whatMinute==0){isStop=false;}
      if(whatMinute==0){updateDisplay();}
    }, 20*i+10);
  }
  if(gameCheck()){
    return 'end';
  }
  updateDisplay();
}

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞休息処理
function rest(){
  
  whatMinute+=12;
  if(whatMinute>=60){
    whatMinute=0;
    py_hp+=1;
    if(whatHour<=7){
      py_hp+=3;
    }
    if(whatHour % 5 == 4){
      plusPop-=1;
      if(plusPop<0){plusPop=0;}
    }
    if(py_hp>100){py_hp=100;}
    whatHour+=1;
    if(whatHour>=24){
      whatHour=0;
      whatDay+=1;
      oilFluctuation();
    }
  }
  if(whatHour==12&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 25 )*Math.floor( Math.random() * 5 )*10+250+carList[myCar][3]/2;
    notice='昼食：'+restPrice+'円';
    moneyNow-=restPrice;
    py_hp+=7;
    if(py_hp>100){py_hp=100;}
  }
  if(whatHour==19&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 40 )*Math.floor( Math.random() * 5 )*10+500+carList[myCar][3]/2;
    notice='夕食：'+restPrice+'円';
    moneyNow-=restPrice;
    py_hp+=7;
    if(py_hp>100){py_hp=100;}
  }
  if(whatHour==0&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 100 )*Math.floor( Math.random() * 50 )*10+1500+carList[myCar][3]*5;
    notice='宿泊：'+restPrice+'円';
    moneyNow-=restPrice;
  }
  if(whatHour==7&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 20 )*Math.floor( Math.random() * 5 )*10+150+carList[myCar][3]/2;
    notice='朝食：'+restPrice+'円';
    moneyNow-=restPrice;
    py_hp+=5;
    if(py_hp>100){py_hp=100;}
  }
  if(whatHour==8&&whatMinute==0){
    let morningMsg=Math.floor(Math.random()*5);
    switch(morningMsg){
      case 0:
        notice='おはようございます';
        break;
      case 1:
        notice='がんばってください';
        break;
      case 2:
        notice='良い天気ですね';
        break;
      case 3:
        notice='トレンドになってます';
        plusPop+=2;
        if(plusPop>100){plusPop=100;}
        break;
      case 4:
        notice='今日もよろしくお願いします';
        break;
    }
  }
}

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞燃料費の変動
function oilFluctuation(){
  let gasFluctuation=Math.floor( Math.random() * 100 );
  if(gasFluctuation>97){
    highOctane+=2;
    regular+=2;
  }else if(gasFluctuation>87){
    highOctane+=1;
    regular+=1;
  }else if(gasFluctuation<2){
    highOctane-=2;
    regular-=2;
  }else if(gasFluctuation<12){
    highOctane-=1;
    regular-=1;
  }else if(gasFluctuation>75){
    lightOil+=1;
  }else if(gasFluctuation<25){
    lightOil-=1;
  }
}
//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞SNSボタン処理
function doSns(){
  if(isDriving||isStop){return;}
  isStop=true;
  let until=(31-whatHour)*5+(60-whatMinute)/12;
  bop=0;
  for(let i=0;i<until;i++){
    setTimeout(function(){
      if(gameCheck()){
        return 'end';
      }
      payments();
      if(whatHour==8 && whatMinute==0){isStop=false;}
      if(whatMinute==0){updateDisplay();}
    }, 20*i+10);
  }
  if(gameCheck()){
    return 'end';
  }
  updateDisplay();
}


//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞観光SNS活動の収支
function payments(){
  whatMinute+=12;
  if(whatMinute>=60){
    py_hp-=4;
    whatMinute=0;
    if(whatHour<=7){
      py_hp+=6;
    }
    if(py_hp>100){py_hp=100;}
    whatHour+=1;
    if(whatHour>=24){
      whatHour=0;
      whatDay+=1;
      oilFluctuation();
    }
  }
  if(whatHour==12&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 25 )*Math.floor( Math.random() * 5 )*10+250+carList[myCar][3]/2;
    bop-=restPrice;
    moneyNow-=restPrice;
    py_hp+=14;
    if(py_hp>100){py_hp=100;}
  }
  if(whatHour==19&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 40 )*Math.floor( Math.random() * 5 )*10+500+carList[myCar][3]/2;
    bop-=restPrice;
    moneyNow-=restPrice;
    py_hp+=15;
    if(py_hp>100){py_hp=100;}
  }
  if(whatHour==0&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 100 )*Math.floor( Math.random() * 50 )*10+1500+carList[myCar][3]*5;
    bop-=restPrice;
    moneyNow-=restPrice;
  }
  if(whatHour==7&&whatMinute==0){
    let restPrice=Math.floor( Math.random() * 20 )*Math.floor( Math.random() * 5 )*10+150+carList[myCar][3]/2;
    bop-=restPrice;
    moneyNow-=restPrice;
    py_hp+=5;
    if(py_hp>100){py_hp=100;}
  }
  let chance1=Math.floor( Math.random() * 100 ) * Math.floor( Math.random() * 100 ) * Math.floor( Math.random() * 100 ) -700000;
  if(chance1>0 && whatHour >8 ){
    bop+=Math.floor(chance1*py_pop/100);
    moneyNow+=Math.floor(chance1*py_pop/100);
    plusPop+=2;
  }
  if(whatMinute==0 && whatHour >8 ){
    let chance2=Math.floor( Math.random() * 1800 )*10-8500;
    bop+=chance2+carList[myCar][3]*5;
    moneyNow+=chance2+carList[myCar][3]*5;
    if(chance2>0){
      plusPop+=1;
    }
  }
  if(plusPop>100){plusPop=100;}
  if(bop>0){
    notice='収支 +'+bop+'円';
  }else{
    notice='収支 '+bop+'円';
  }
}

//■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□＞給油ボタン処理
function gasMax(){
  if(isDriving||isStop){return;}
  
  let howGas=carList[myCar][2]-gasNow;
  switch(carList[myCar][4]){
    case 173:
      notice='ハイオク '+howGas.toFixed(1)+'L:'+Math.floor(howGas*highOctane)+'円';
      moneyNow=moneyNow-Math.floor(howGas*highOctane);
      gasNow=carList[myCar][2];
      break;
    case 161:
      notice='レギュラー'+howGas.toFixed(1)+'L:'+Math.floor(howGas*regular)+'円';
      moneyNow=moneyNow-Math.floor(howGas*regular);
      gasNow=carList[myCar][2];
      break;
    case 138:
      notice='軽油 '+howGas.toFixed(1)+'L:'+Math.floor(howGas*lightOil)+'円';
      moneyNow=moneyNow-Math.floor(howGas*lightOil);
      gasNow=carList[myCar][2];
      break;
    default:
      notice='レギュラー'+howGas.toFixed(1)+'L:'+Math.floor(howGas*regular)+'円';
      moneyNow=moneyNow-Math.floor(howGas*regular);
      gasNow=carList[myCar][2];
      break;
  }
  if(gameCheck()){
    return 'end';
  }
  updateDisplay();
}