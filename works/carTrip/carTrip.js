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
var carNo=0;
const mapIdList=['hokkaido','aomori','iwate','miyagi','akita','yamagata','hukusima','ibaraki','tochigi','gunma','saitama','chiba','tokyo','kanagawa','yamanashi','nagano','nigata','toyama','ishikawa','hukui','gihu','sizuoka','aichi','mie','shiga','kyoto','osaka','hyogo','nara','wakayama','tottori','shimane','okayama','hiroshima','yamaguchi','tokushima','kagawa','aichi','kochi','hukuoka','saga','nagasaki','kumamoto','oita','miyazaki','kagoshima','okinawa'];
const mapList=[
  ['北海道',1360,1700],
  ['青森県',1402,1402],
  ['岩手県',1530,1275],
  ['宮城県',1487,1105],
  ['秋田県',1343,1275],
  ['山形県',1360,1105],
  ['福島県',1445,977],
  ['茨城県',1445,850],
  ['栃木県',1360,892],
  ['群馬県',1275,850],
  ['埼玉県',1292,799],
  ['千葉県',1402,739],
  ['東京都',1343,765],
  ['神奈川',1309,714],
  ['山梨県',1207,765],
  ['長野県',1147,850],
  ['新潟県',1232,1020],
  ['富山県',1088,918],
  ['石川県',977,935],
  ['福井県',935,850],
  ['岐阜県',1037,807],
  ['静岡県',1232,680],
  ['愛知県',1062,680],
  ['三重県',977,595],
  ['滋賀県',952,765],
  ['京都府',892,765],
  ['大阪府',850,680],
  ['兵庫県',807,722],
  ['奈良県',905,610],
  ['和歌山',850,552],
  ['鳥取県',680,807],
  ['島根県',510,765],
  ['岡山県',680,722],
  ['広島県',552,680],
  ['山口県',425,680],
  ['徳島県',765,552],
  ['香川県',680,637],
  ['愛媛県',552,552],
  ['高知県',637,510],
  ['福岡県',340,595],
  ['佐賀県',255,595],
  ['長崎県',212,510],
  ['熊本県',340,467],
  ['大分県',425,510],
  ['宮崎県',425,425],
  ['鹿児島',340,340],
  ['沖縄県',170,127]];
var mapNo=26;

var isSet=true;
var isDriving=false;
var notice='車旅！CarTuber！';

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

var meansRute='shitamichi';
var destination=0;

var plusPop=0;

var stX=850;
var stY=680;
var goX=0;
var goY=0;

var pyX=850;
var pyY=680;
var py_yen=2000000;
var py_hp=100;
var py_pop=2;
var py_spd=0;
var py_gas=50;

var gasNow=13.5;
var howLong=212;
var reward=71200;
var spdNow=0;

$(document).ready( function(){
  if(isSet){
    isSet=false;
    if(window.sessionStorage.getItem(['dspID'])=='チート'){
      moneyNow=20000000;
      py_yen=20000000;
    }
    gameMsg.textContent=notice;
    dispNow.textContent=whatDay+'日目 '+( '00' + whatHour ).slice( -2 )+':'+( '00' + whatMinute ).slice( -2 )+' '+mapList[mapNo][0];
    funds.textContent='資金：'+Math.floor(moneyNow/10000)+'万'+( '0000' + moneyNow ).slice( -4 )+'円';
    mileageAll.textContent='車旅：'+milage+'km';
    carOfNow.textContent='@'+carList[carNo][0];
    nextReq.textContent='NEXT講演地：'+mapList[nextGoal][0];
    gasRrice.textContent='H '+highOctane+' R '+regular+' K '+lightOil;
    calcMoney.textContent='購入後＞'+(moneyNow-carList[carSelect][3]*10000+carList[myCar][3]*7000)+'円';
    
  }
  }
);