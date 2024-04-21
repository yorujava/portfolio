'use strict';
fetch("numpreJavaCode.html")
.then((response) => response.text())
.then((data) => document.querySelector("#right").innerHTML = data);
function copy() {
    var text = document.getElementById('numpreJava');
    text.select();
    document.execCommand("copy");
}
var isRun=false;
var isClear=false;
var inputNumber=1;
var isFast=true;
const numpreMsg=document.getElementById('numpreMsg');
const run=document.getElementById('run');

if(!isRun){//ページ読み込み直後に実行する作問系ボタン
    for(let i=1;i<10;i++){
        const button=document.createElement('button');//1～9のボタン
        button.textContent=i;
        button.classList.add(i);
        button.setAttribute("id",i);
        button.setAttribute('onclick', "inpNum("+i+")");
        button.classList.add("iptN");
        if(i==1&&isFast){
            button.classList.add('numMk');
            isFast=false;
        }
        numpreMsg.appendChild(button);
    }
    const button=document.createElement('button');//消去ボタン
    button.textContent='消';
    button.classList.add('0');
    button.setAttribute("id",'0');
    button.setAttribute('onclick', "inpNum('0')");
    button.classList.add("iptN");
    numpreMsg.appendChild(button);

    const input=document.createElement('input');//解答させるボタン
    input.value='解かせる';
    input.type='submit';
    input.setAttribute('onclick', "runSlv()");
    input.classList.add("iptN");
    run.appendChild(input);
}
function retry(){//作問エラー時の作問系ボタン再実装
    isRun=false;
    isClear=false;
    afNum2=729;//通過後の候補数
    isError=false;//エラー点灯
    isRand=false;//ランダム試行段階突入フラグ
    isRanLoop=false;
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            finalBords[i][j]=0;
            finalBordsD[i][j]=0;
        }
    }
    for(let i=1;i<10;i++){
        const button=document.createElement('button');//1～9のボタン
        button.textContent=i;
        button.classList.add(i);
        button.setAttribute("id",i);
        button.setAttribute('onclick', "inpNum("+i+")");
        button.classList.add("iptN");
        if(i==1&&isFast){
            button.classList.add('numMk');
            isFast=false;
        }
        numpreMsg.appendChild(button);
    }
    const button=document.createElement('button');//消去ボタン
    button.textContent='消';
    button.classList.add('0');
    button.setAttribute("id",'0');
    button.setAttribute('onclick', "inpNum('0')");
    button.classList.add("iptN");
    numpreMsg.appendChild(button);

    const input=document.createElement('input');//解答させるボタン
    input.value='解かせる';
    input.type='submit';
    input.setAttribute('onclick', "runSlv()");
    input.classList.add("iptN");
    run.appendChild(input);

    inpNum(inputNumber);//初期選択ボタン設定
}
function inpNum(e){//数字選択ボタンクリック時処理
    if(inputNumber===''){//前回に消去を選択していたとき
        var hoge='0';
        const remv=document.getElementById(hoge);
        remv.classList.remove('numMk');
    }else{
    var hoge=inputNumber;//前回に数字を選択していた時
    const remv=document.getElementById(hoge);
    remv.classList.remove('numMk');
    }
    var hoge=e;
    const ad=document.getElementById(hoge);
    ad.classList.add('numMk');
    if(e==0){
        inputNumber='';//消去を選択したとき
    }else{
    inputNumber=e;//数字を選択したとき
}}
  function input(e){//マス目をクリックして書き入れる
    if(!isRun&&!isClear){
        if(e!=0){
    const ipt=document.getElementById(e);
    const th = document.querySelector('th');
    ipt.textContent=inputNumber;
  }
  }}
  var bords=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]];//メインで計算処理するボード、10×10で0は殺して使う
  var finalBords=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]];//数字確定済みで「1」にする確認ボード
    var finalBordsD=[
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]];//ダブル数字確定済みで「1」にする確認ボード
  var copyBords=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]];//ランダム試行突入時のセーブ＆ロード用
    var priNum=[223092870, 2, 3, 5, 7, 11, 13, 17, 19, 23];//数字候補を素数にして乗算させる対応リスト
    var tuwins = [ 6, 10, 14, 22, 26, 34, 38, 46, 15, 21, 33, 39, 51, 57, 69, 35, 55, 65, 85, 95, 115, 77, 91, 119, 133, 161, 143, 187, 209, 253, 221, 247, 299, 323, 391, 437 ];//ダブル候補リスト
    var tuinXs = [ 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 11, 11, 11, 11, 13, 13, 13, 17, 17, 19 ];//ダブル候補処理用
    var tuinYs = [ 3, 5, 7, 11, 13, 17, 19, 23, 5, 7, 11, 13, 17, 19, 23, 7, 11, 13, 17, 19, 23, 11, 13, 17, 19, 23, 13, 17, 19, 23, 17, 19, 23, 19, 23, 23 ];//ダブル候補処理用

    var tuwins2 = [ 6, 10, 14, 22, 26, 34, 38, 15, 21, 33, 39, 51, 57, 35, 55, 65, 85, 95, 77, 91, 119, 133, 143, 187, 209, 221, 247, 323 ];//トリプル候補処理用
    var tuinXs2 = [ 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 7, 7, 7, 7, 11, 11, 11, 13, 13, 17 ];//トリプル候補処理用
    var tuinYs2 = [ 3, 5, 7, 11, 13, 17, 19, 5, 7, 11, 13, 17, 19, 7, 11, 13, 17, 19, 11, 13, 17, 19, 13, 17, 19, 17, 19, 19 ];//トリプル候補処理用

    var bfNum=0;//通過前の確定数
    var afNum=0;//通過後の確定数
    var bfNum2=0;//通過前の候補数
    var afNum2=729;//通過後の候補数
    var isError=false;//エラー点灯
    var isRand=false;//ランダム試行段階突入フラグ
    var isRanLoop=false;

  var loopCount=0;

  function runSlv(){//「解答させる」が押されて解答を開始
    isRun=true;
    const elm = document.getElementsByClassName('iptN');//作問ボタンを除去
    if (0 < elm.length) {
        [...elm].forEach(function(v){ return v.remove() })
    }
      for(let i=1;i<=9;i++){//マス目の入力から処理用ボード作成
        for(let j=1;j<=9;j++){
            let hoge=i*10+j;
            const ipt=document.getElementById(hoge);
            const iptPriNum=priNum[ipt.textContent];            
            if(ipt.textContent==''){
                bords[i][j]=223092870;
            }else{
            bords[i][j]=iptPriNum;
            afNum++;
            }
        }
      }
      solveTheProblem();//メイン解答ロジックへ
  }
  function checkError(){//不整合チェック
    let tate=0;
    let yoko=0;
    let waku=0;
    let tate2=0;
    let yoko2=0;
    let waku2=0;
    let nashi=0;
    for(let k=1;k<=9;k++){
        for(let i=0;i<9;i++){
            tate=0;
            yoko=0;
            waku=0;
            tate2=0;
            yoko2=0;
            waku2=0;
            nashi=0;
            for(let j=0;j<9;j++){
                let i4=(i/3|0)*3;
                let i3=(j/3|0);
                let j4=(i%3)*3;
                let j3=(j%3);
                let i2=i4+i3+1;
                let j2=j4+j3+1;
                if(bords[j+1][i+1]==priNum[k]){
                    tate++;
                }
                if(bords[i+1][j+1]==priNum[k]){
                    yoko++;
                }
                if(bords[i2][j2]==priNum[k]){
                    waku++;
                }
                if(bords[j+1][i+1]%priNum[k]==0){
                    tate2++;
                }
                if(bords[i+1][j+1]%priNum[k]==0){
                    yoko2++;
                }
                if(bords[i2][j2]%priNum[k]==0){
                    waku2++;
                }
                if(bords[i+1][j+1]<2){
                    nashi++;
                }
            }
            if(tate>1||yoko>1||waku>1||tate2==0||yoko2==0||waku2==0||nashi>0){
                isError=true;
                return;
            }
        }
    }
  }
  function determineNumber(i,j,k){//確定数字による周囲の候補の除去
    if(!isRand){
        finalBords[i+1][j+1]=1;
    }
    for(let x=0;x<9;x++){
        if(bords[i+1][x+1]%priNum[k]==0&&bords[i+1][x+1]!=priNum[k]){
            bords[i+1][x+1]/=priNum[k];
        }
        if(bords[x+1][j+1]%priNum[k]==0&&bords[x+1][j+1]!=priNum[k]){
            bords[x+1][j+1]/=priNum[k];
        }
        let i4=(i/3|0)*3;
        let i3=(x/3|0);
        let j4=(j/3|0)*3;
        let j3=(x%3);
        let i2=i4+i3;
        let j2=j4+j3;
        if(bords[i2+1][j2+1]%priNum[k]==0&&bords[i2+1][j2+1]!=priNum[k]){
            bords[i2+1][j2+1]/=priNum[k];
        }
    }

  }
function checkReturn(){//クリア＆エラー処理ブーリアン返し
    afNum=0;
    for(let i=0;i<9;i++){//進展の調査タイプ1
        for(let j=0;j<9;j++){
            if(bords[i+1][j+1]==2||bords[i+1][j+1]==3||bords[i+1][j+1]==5||bords[i+1][j+1]==7||bords[i+1][j+1]==11||bords[i+1][j+1]==13||bords[i+1][j+1]==17||bords[i+1][j+1]==19||bords[i+1][j+1]==23){
                afNum++;
            }
        }
    }
    checkError();
    if(isError&&!isRand){
      const b=document.createElement('b');
      const br=document.createElement('br');
      b.classList.add("iptN");
      br.classList.add("iptN");
      b.textContent='問題作成に間違いがあります。要修正！';
      numpreMsg.appendChild(b);
      numpreMsg.appendChild(br);
      retry();
      return true;
    }else if(isError&&isRand){
        for(let i=1;i<10;i++){//コピーから復元
            for(let j=1;j<10;j++){
                bords[i][j]=copyBords[i][j];
            }
        }
        isError=false;
        return false;
    }
    if(afNum==81){
        dispBord();
        const b=document.createElement('b');
        const br=document.createElement('br');
        b.classList.add("iptN");
        br.classList.add("iptN");
        b.textContent='解答を表示しました';
        numpreMsg.appendChild(br);
        numpreMsg.appendChild(b);
        isClear=true;
        isRun=false;
        isRand=false;
        isRanLoop=false;  
        return true;
    }
    return false;
}
  function dispBord(){//ボード表示
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            let hoge=i*10+j;
            let dispBordNumber=document.getElementById(hoge);
            let pNumber=bords[i][j];
            switch(pNumber){
                case 2:
                    dispBordNumber.textContent=1;
                    break;
                case 3:
                    dispBordNumber.textContent=2;
                    break;
                case 5:
                    dispBordNumber.textContent=3;
                    break;
                case 7:
                    dispBordNumber.textContent=4;
                    break;
                case 11:
                    dispBordNumber.textContent=5;
                    break;
                case 13:
                    dispBordNumber.textContent=6;
                    break;
                case 17:
                    dispBordNumber.textContent=7;
                    break;
                case 19:
                    dispBordNumber.textContent=8;
                    break;
                case 23:
                    dispBordNumber.textContent=9;
                    break;
                default:
                    dispBordNumber.textContent='';
                    break;
            }
        }
    }
  }

  function solveTheProblem(){//メインのロジック
    while(true){//無限ループ
        bfNum=afNum;
        afNum=0;
        bfNum2=afNum2;
        afNum2=0;
        for(let k=1;k<=9;k++){//唯一所持の検索
            for(let i=0;i<9;i++){
                let countTate=0;
                let countYoko=0;
                let countWaku=0;
                let tateIchi=0;
                let yokoIchi=0;
                let wakuX=0;
                let wakuY=0;
                for(let j=0;j<9;j++){
                    if(bords[j+1][i+1]%priNum[k]==0){
                        countTate++;
                        tateIchi=j;
                    }
                    if(bords[i+1][j+1]%priNum[k]==0){
                        countYoko++;
                        yokoIchi=j;
                    }
                    let i4=(i/3|0)*3;
                    let i3=(j/3|0);
                    let j4=(i%3)*3;
                    let j3=(j%3);
                    let i2=i4+i3;
                    let j2=j4+j3;
                    if(bords[i2+1][j2+1]%priNum[k]==0){
                        countWaku++;
                        wakuX=i2;
                        wakuY=j2;
                    }
                }
                if(countTate==1&&finalBords[tateIchi+1][i+1]==0){
                    bords[tateIchi+1][i+1]=priNum[k];
                }
                if(countYoko==1&&finalBords[i+1][yokoIchi+1]==0){
                    bords[i+1][yokoIchi+1]=priNum[k];
                }
                if(countWaku==1&&finalBords[wakuX+1][wakuY+1]==0){
                    bords[wakuX+1][wakuY+1]=priNum[k];
                }
            }
        }
        for(let k=1;k<=9;k++){//独数の検索
            for(let i=0;i<9;i++){
                for(let j=0;j<9;j++){
                    if(bords[i+1][j+1]==priNum[k]&&finalBords[i+1][j+1]==0){//独数の行列と枠内の候補削除
                        determineNumber(i,j,k);
                    }
                }
            }
        }
        if(checkReturn()){//完全解答と作問間違いのチェック
            return;
        }
        if(bfNum>afNum){//進展があればコンティニュー
            continue;
        }
        for(let k=1;k<=9;k++){//ブロック内の偏りからビームを発射
            for(let i=0;i<9;i++){
				let countX0 = 0;
				let countX1 = 0;
				let countX2 = 0;
				let countY0 = 0;
				let countY1 = 0;
				let countY2 = 0;
                for(let j=0;j<9;j++){
                    let i4=(i/3|0)*3;
                    let i3=(j/3|0);
                    let j4=(i%3)*3;
                    let j3=(j%3);
                    let i2=i4+i3;
                    let j2=j4+j3;
                    if(bords[i2+1][j2+1]%priNum[k]==0){
                        if(i2%3==0){
                            countX0++;
                        }
                        if(i2%3==1){
                            countX1++;
                        }
                        if(i2%3==2){
                            countX2++;
                        }
                        if(j2%3==0){
                            countY0++;
                        }
                        if(j2%3==1){
                            countY1++;
                        }
                        if(j2%3==2){
                            countY2++;
                        }
                    }
                }
                if (countX0 > 1 && countX1 == 0 && countX2 == 0) {
                    fireBeam( i, k, 0);
                }
                if (countX0 == 0 && countX1 > 1 && countX2 == 0) {
                    fireBeam( i, k, 1);
                }
                if (countX0 == 0 && countX1 == 0 && countX2 > 1) {
                    fireBeam( i, k, 2);
                }
                if (countY0 > 1 && countY1 == 0 && countY2 == 0) {
                    fireBeam( i, k, 3);
                }
                if (countY0 == 0 && countY1 > 1 && countY2 == 0) {
                    fireBeam( i, k, 4);
                }
                if (countY0 == 0 && countY1 == 0 && countY2 > 1) {
                    fireBeam( i, k, 5);
                }
            }
        }
        for(let k=0;k<36;k++){//候補が二つに関する処理
            for(let i=0;i<9;i++){
                let countA=0;
                let countB=0;
                let countC=0;
                let pointA1=0;
                let pointA2=0;
                let pointB1=0;
                let pointB2=0;
                let pointCx1=0;
                let pointCx2=0;
                let pointCy1=0;
                let pointCy2=0;
                for(let j=0;j<9;j++){
                    if(bords[j+1][i+1]%tuinXs[k]==0||bords[j+1][i+1]%tuinYs[k]==0){
                        countA++;
                        if(countA==1){
                            pointA1=j;
                        }else{
                            pointA2=j;
                        }
                    }
                    if(bords[i+1][j+1]%tuinXs[k]==0||bords[i+1][j+1]%tuinYs[k]==0){
                        countB++;
                        if(countB==1){
                            pointB1=j;
                        }else{
                            pointB2=j;
                        }
                    }
                    let i4=(i/3|0)*3;
                    let i3=(j/3|0);
                    let j4=(i%3)*3;
                    let j3=(j%3);
                    let i2=i4+i3;
                    let j2=j4+j3;
                    if(bords[i2+1][j2+1]%tuinXs[k]==0||bords[i2+1][j2+1]%tuinYs[k]==0){
                        countC++;
                        if(countC==1){
                            pointCx1=i2;
                            pointCy1=j2;
                        }else{
                            pointCx2=i2;
                            pointCy2=j2;
                        }
                    }
                }
                if(countA==2&&finalBordsD[pointA1+1][i+1]==0&&finalBordsD[pointA2+1][i+1]==0){
                    if(bords[pointA1+1][i+1]!=tuinXs[k]&&bords[pointA1+1][i+1]!=tuinYs[k]&&bords[pointA2+1][i+1]!=tuinXs[k]&&bords[pointA2+1][i+1]!=tuinYs[k]&& bords[pointA1+1][i+1]%tuwins[k]==0 && bords[pointA2+1][i+1]%tuwins[k]==0){
                    if(!isRand){
                        finalBordsD[pointA1+1][i+1]=1;
                        finalBordsD[pointA2+1][i+1]=1;
                    }
                    bords[pointA1+1][i+1]=tuwins[k];
                    bords[pointA2+1][i+1]=tuwins[k];
                    }
                }
                if(countB==2&&finalBordsD[i+1][pointB1+1]==0&&finalBordsD[i+1][pointB2+1]==0){
                    if(bords[i+1][pointB1+1]!=tuinXs[k]&&bords[i+1][pointB1+1]!=tuinYs[k]&&bords[i+1][pointB2+1]!=tuinXs[k]&&bords[i+1][pointB2+1]!=tuinYs[k]&& bords[i+1][pointB1+1]%tuwins[k]==0 && bords[i+1][pointB2+1]%tuwins[k]==0){
                    if(!isRand){
                        finalBordsD[i+1][pointB1+1]=1;
                        finalBordsD[i+1][pointB2+1]=1;
                    }
                    bords[i+1][pointB1+1]=tuwins[k];
                    bords[i+1][pointB2+1]=tuwins[k];
                }
                }
                if(countC==2&&finalBordsD[pointCx1+1][pointCy1+1]==0&&finalBordsD[pointCx2+1][pointCy2+1]==0){
                    if(bords[pointCx1+1][pointCy1+1]!=tuinXs[k]&&bords[pointCx1+1][pointCy1+1]!=tuinYs[k]&&bords[pointCx2+1][pointCy2+1]!=tuinXs[k]&&bords[pointCx2+1][pointCy2+1]!=tuinYs[k]&& bords[pointCx1+1][pointCy1+1]%tuwins[k]==0 && bords[pointCx2+1][pointCy2+1]%tuwins[k]==0){
                    if(!isRand){
                        finalBordsD[pointCx1+1][pointCy1+1]=1;
                        finalBordsD[pointCx2+1][pointCy2+1]=1;
                    }
                    bords[pointCx1+1][pointCy1+1]=tuwins[k];
                    bords[pointCx2+1][pointCy2+1]=tuwins[k];
                }
                }
            }
        }
        for(let k=0;k<28;k++){//候補が３つに対する処理
            let st=0;
            switch (k) {
            case 0:st = 3;break;
            case 1:st = 4;break;
            case 2:st = 5;break;
            case 3:st = 6;break;
            case 4:st = 7;break;
            case 5:st = 8;break;
            case 6:st = 9;break;
            case 7:st = 4;break;
            case 8:st = 5;break;
            case 9:st = 6;break;
            case 10:st = 7;break;
            case 11:st = 8;break;
            case 12:st = 9;break;
            case 13:st = 5;break;
            case 14:st = 6;break;
            case 15:st = 7;break;
            case 16:st = 8;break;
            case 17:st = 9;break;
            case 18:st = 6;break;
            case 19:st = 7;break;
            case 20:st = 8;break;
            case 21:st = 9;break;
            case 22:st = 7;break;
            case 23:st = 8;break;
            case 24:st = 9;break;
            case 25:st = 8;break;
            case 26:st = 9;break;
            case 27:st = 9;break;
            }
            for(let kk=st;kk<=9;kk++){
                for(let i=0;i<9;i++){
                    let countA=0;
                    let countB=0;
                    let countC=0;
                    let ax=0;
                    let isKkA=false;
                    let isKkB=false;
                    let isKkC=false;
                    for(let j=0;j<9;j++){
                        ax=bords[i+1][j+1];
                        isKkA=ax == tuwins2[k] || ax == tuwins2[k] * priNum[kk] || ax == tuinXs2[k] * priNum[kk]|| ax == tuinYs2[k] * priNum[kk];
                        if(isKkA){
                            countA++;
                        }
                        ax=bords[j+1][i+1];
                        isKkB= ax == tuwins2[k] || ax == tuwins2[k] * priNum[kk] || ax == tuinXs2[k] * priNum[kk]|| ax == tuinYs2[k] * priNum[kk];
                        if(isKkB){
                            countB++;
                        }
                        let i4=(i/3|0)*3;
                        let i3=(j/3|0);
                        let j4=(i%3)*3;
                        let j3=(j%3);
                        let i2=i4+i3;
                        let j2=j4+j3;
                        ax=bords[i2+1][j2+1];
                        isKkC= ax == tuwins2[k] || ax == tuwins2[k] * priNum[kk] || ax == tuinXs2[k] * priNum[kk]|| ax == tuinYs2[k] * priNum[kk];
                        if(isKkC){
                            countC++;
                        }
                    }
                    if(countA==3){
                        for(let j=0;j<9;j++){
                            let xy=bords[i+1][j+1];
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % tuinXs2[k] == 0 && xy != tuinXs2[k]){
                                bords[i+1][j+1]/=tuinXs2[k];
                            }
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % tuinYs2[k] == 0 && xy != tuinYs2[k]){
                                bords[i+1][j+1]/=tuinYs2[k];
                            }
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]& xy % priNum[kk] == 0 && xy != priNum[kk]){
                                bords[i+1][j+1]/=priNum[kk];
                            }
                        }
                    }
                    if(countB==3){
                        for(let j=0;j<9;j++){
                            let xy=bords[j+1][i+1];
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % tuinXs2[k] == 0 && xy != tuinXs2[k]){
                                bords[j+1][i+1]/=tuinXs2[k];
                            }
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % tuinYs2[k] == 0 && xy != tuinYs2[k]){
                                bords[j+1][i+1]/=tuinYs2[k];
                            }
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % priNum[kk] == 0 && xy != priNum[kk]){
                                bords[j+1][i+1]/=priNum[kk];
                            }
                        }
                    }
                    if(countC==3){
                        for(let j=0;j<9;j++){
                            let i4=(i/3|0)*3;
                            let i3=(j/3|0);
                            let j4=(i%3)*3;
                            let j3=(j%3);
                            let i2=i4+i3;
                            let j2=j4+j3;
                            let xy=bords[i2+1][j2+1];
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % tuinXs2[k] == 0 && xy != tuinXs[k]){
                                bords[i2+1][j2+1]/=tuinXs[k];
                            }
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % tuinYs2[k] == 0 && xy != tuinYs2[k]){
                                bords[i2+1][j2+1]/=tuinYs2[k];
                            }
                            if(xy != tuwins2[k] && xy != tuwins2[k] * priNum[kk]&& xy != tuinXs2[k] * priNum[kk] && xy != tuinYs2[k] * priNum[kk]&& xy % priNum[kk] == 0 && xy != priNum[kk]){
                                bords[i2+1][j2+1]/=priNum[kk];
                            }
                        }
                    }
                }
            }
        }
        if(checkReturn()){//完全解答と作問間違いのチェック
            return;
        }
        afNum2=0;
        for(let k=1;k<=9;k++){//候補数検索
            for(let i=0;i<9;i++){
                for(let j=0;j<9;j++){
                    if(bords[i+1][j+1]%priNum[k]==0){
                        afNum2++;
                    }
                }
            }
        }
        if(bfNum2>afNum2){//進展があればコンティニュー
            continue;
        }
        for(let k=1;k<=9;k++){//テクニック＜X-Wing＞
            let wXs=[];
            let wYs=[];
            wXs.length=0;
            wYs.length=0;
            let xy1 = 0;
            let xy2 = 0;
            let xy3 = 0;
            let xy4 = 0;
            let yx1 = 0;
            let yx2 = 0;
            let yx3 = 0;
            let yx4 = 0;
            for(let i=0;i<9;i++){
                let countA=0;
                let countB=0;
                for(let j=0;j<9;j++){
                    if(bords[i+1][j+1]%priNum[k]==0&&bords[i+1][j+1]!=priNum[k]&&countA<3){
                        countA++;
                        if(countA==1){
                            xy1 = i * 10 + j;
                            wXs.push(xy1);
                        }else if(countA==2){
                            xy2 = i * 10 + j;
                            wXs.push(xy2);
                        }else if(countA==3){
                            wXs.splice(wXs.indexOf(xy1),1);
                            wXs.splice(wXs.indexOf(xy2),1);
                        }
                    }
                    if(bords[j+1][i+1]%priNum[k]==0&&bords[j+1][i+1]!=priNum[k]&&countA<3){
                        countB++;
                        if(countB==1){
                            yx1 = j * 10 + i;
                            wYs.push(yx1);
                        }else if(countB==2){
                            yx2 = j * 10 + i;
                            wYs.push(yx2);
                        }else if(countB==3){
                            wYs.splice(wYs.indexOf(yx1),1);
                            wYs.splice(wYs.indexOf(yx2),1);
                        }
                    }
                }
            }
            for(let i=0;i<8;i++){
                for(let j=0;j<8;j++){
                    xy1=i*10+j;
                    if(wXs.includes(xy1)){
                        wXs.splice(wXs.indexOf(xy1),1);
                        for(let jz=j+1;jz<9;jz++){
                            xy2=i*10+jz;
                            if(wXs.includes(xy2)){
                                wXs.splice(wXs.indexOf(xy2),1);
                                for(let iz=i+1;iz<9;iz++){
                                    xy3=iz*10+j;
                                    xy4=iz-10+jz;
                                    if(wXs.includes(xy3)&&wXs.includes(xy4)){
                                        wXs.splice(wXs.indexOf(xy3),1);
                                        wXs.splice(wXs.indexOf(xy4),1);
                                        for(let izz=0;izz<9;izz++){
                                            if(izz!=i&&izz!=iz&&bords[izz+1][j+1]%priNum[k]==0){
                                                bords[izz+1][j+1]/=priNum[k];
                                            }
                                            if(izz!=i&&izz!=iz&&bords[izz+1][jz+1]%priNum[k]==0){
                                                bords[izz+1][jz+1]/=priNum[k];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    yx1=j*10+i;
                    if(wYs.includes(yx1)){
                        wYs.splice(wYs.indexOf(yx1),1);
                        for(let jz=j+1;jz<9;jz++){
                            yx2=jz*10+i;
                            if(wYs.includes(yx2)){
                                wYs.splice(wYs.indexOf(yx2),1);
                                for(let iz=i+1;iz<9;iz++){
                                    yx3=j*10+iz;
                                    yx4=jz-10+iz;
                                    if(wYs.includes(yx3)&&wYs.includes(yx4)){
                                        wYs.splice(wYs.indexOf(yx3),1);
                                        wYs.splice(wYs.indexOf(yx4),1);
                                        for(let izz=0;izz<9;izz++){
                                            if(izz!=i&&izz!=iz&&bords[j+1][izz+1]%priNum[k]==0){
                                                bords[j+1][izz+1]/=priNum[k];
                                            }
                                            if(izz!=i&&izz!=iz&&bords[jz+1][izz+1]%priNum[k]==0){
                                                bords[jz+1][izz+1]/=priNum[k];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for(let k=0;k<36;k++){//候補が二つに関する処理 その2
            let countA2=0;
            let countB2=0;
            let countC2=0;
            for(let i=0;i<9;i++){
                countA2=0;
                countB2=0;
                countC2=0;
                for(let j=0;j<9;j++){
                    if(bords[i+1][j+1]==tuwins[k]){
                        countA2++;
                    }
                    if(bords[j+1][i+1]==tuwins[k]){
                        countB2++;
                    }
                    let i4=(i/3|0)*3;
                    let i3=(j/3|0);
                    let j4=(i%3)*3;
                    let j3=(j%3);
                    let i2=i4+i3;
                    let j2=j4+j3;
                    if(bords[i2+1][j2+1]==tuwins[k]){
                        countC2++;
                    }
                }
                if(countA2==2){
                    for(let j=0;j<9;j++){
                        if(bords[i+1][j+1]!=tuwins[k]&&bords[i+1][j+1]%tuinXs[k]==0&&bords[i+1][j+1]!=tuinXs[k]){
                            bords[i+1][j+1]/=tuinXs[k];
                        }
                        if(bords[i+1][j+1]!=tuwins[k]&&bords[i+1][j+1]%tuinYs[k]==0&&bords[i+1][j+1]!=tuinYs[k]){
                            bords[i+1][j+1]/=tuinYs[k];
                        }
                    }
                }
                if(countB2==2){
                    for(let j=0;j<9;j++){
                        if(bords[j+1][i+1]!=tuwins[k]&&bords[j+1][i+1]%tuinXs[k]==0&&bords[j+1][i+1]!=tuinXs[k]){
                            bords[j+1][i+1]/=tuinXs[k];
                        }
                        if(bords[j+1][i+1]!=tuwins[k]&&bords[j+1][i+1]%tuinYs[k]==0&&bords[j+1][i+1]!=tuinYs[k]){
                            bords[j+1][i+1]/=tuinYs[k];
                        }
                    }
                }
                if(countC2==2){
                    for(let j=0;j<9;j++){
                        let i4=(i/3|0)*3;
                        let i3=(j/3|0);
                        let j4=(i%3)*3;
                        let j3=(j%3);
                        let i2=i4+i3;
                        let j2=j4+j3;
                        if(bords[i2+1][j2+1]!=tuwins[k]&&bords[i2+1][j2+1]%tuinXs[k]==0&&bords[i2+1][j2+1]!=tuinXs[k]){
                            bords[i2+1][j2+1]/=tuinXs[k];
                        }
                        if(bords[i2+1][j2+1]!=tuwins[k]&&bords[i2+1][j2+1]%tuinYs[k]==0&&bords[i2+1][j2+1]!=tuinYs[k]){
                            bords[i2+1][j2+1]/=tuinYs[k];
                        }
                    }
                }
            }
        }
        if(checkReturn()){//完全解答と作問間違いのチェック
            return;
        }
        afNum2=0;
        for(let k=1;k<=9;k++){//候補数検索
            for(let i=0;i<9;i++){
                for(let j=0;j<9;j++){
                    if(bords[i+1][j+1]%priNum[k]==0){
                        afNum2++;
                    }
                }
            }
        }
        if(bfNum2>afNum2){//進展があればコンティニュー
            continue;
        }
        if(bfNum>afNum){//進展があればコンティニュー
            continue;
        }
        break;
    }//ロジカル内ループ
    if(isRand){
        return;
    }else{
    isRand=true;//ランダム戦に突入
    isRanLoop=true;
    for(let i=1;i<10;i++){//コピーを作成
        for(let j=1;j<10;j++){
            copyBords[i][j]=bords[i][j];
        }
    }
    const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      dispBord();
      const b=document.createElement('b');
      const br=document.createElement('br');
      b.classList.add("iptN");
      br.classList.add("iptN");
      b.textContent='ランダム解析フェーズ';
      numpreMsg.appendChild(b);
      numpreMsg.appendChild(br);
      resolve();
    }, 10);
  });
  
  promise.then(function(){
    waitForDisplay();
  });
  }
  function endLoop(){
    isRanLoop=false;
    const b=document.createElement('b');
    const br=document.createElement('br');
    b.classList.add("iptN");
    br.classList.add("iptN");
    b.textContent='解析を中止します';
    numpreMsg.appendChild(br);
    numpreMsg.appendChild(b);
  }
}
function waitForDisplay(){
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve();
        }, 50);
      });
      
      promise.then(function(){
          challengeRandom();
      });
}
  function fireBeam( x, k, n){//ブロック内の偏りからのビームで候補除去
    if(n<3){
        for(let i=3;i<9;i++){
            let i2=((x/3|0)*3+n)%9;
            let j2=((x%3)*3+i)%9;
            if(bords[i2+1][j2+1]%priNum[k]==0&&bords[i2+1][j2+1]!=priNum[k]){
                bords[i2+1][j2+1]/=priNum[k];
            }
        }
    }else{
        for(let i=3;i<9;i++){
            let i2=((x/3|0)*3+i)%9;
            let j2=((x%3)*3+n-3)%9;
            if(bords[i2+1][j2+1]%priNum[k]==0&&bords[i2+1][j2+1]!=priNum[k]){
                bords[i2+1][j2+1]/=priNum[k];
            }
        }
    }
  }

  function challengeRandom(){
    while(isRanLoop){
        bfNum=afNum;
        afNum=0;
        bfNum2=afNum2;
        afNum2=0;
        loopCount++;
        while(true){
            
            let i= Math.floor( Math.random() * 9 );
            let j= Math.floor( Math.random() * 9 );
            let s= Math.floor( Math.random() * 9 );
            if(bords[i+1][j+1]==2||bords[i+1][j+1]==3||bords[i+1][j+1]==5||bords[i+1][j+1]==7||bords[i+1][j+1]==11||bords[i+1][j+1]==13||bords[i+1][j+1]==17||bords[i+1][j+1]==19||bords[i+1][j+1]==23){
                continue;
            }else{
                for(let x=0;x<9;x++){
                    let k=(s+x)%9+1;
                    if(bords[i+1][j+1]%priNum[k]==0){
                        bords[i+1][j+1]=priNum[k];
                        determineNumber(i,j,k);
                        break;
                    }
                }
                break;
            }
        }
        if(checkReturn()){//完全解答と作問間違いのチェック
            return;
        }
        if(loopCount%21==0||afNum>60){
            solveTheProblem();
        }
        if(loopCount%10000==0){
            for(let i=1;i<10;i++){//コピーから復元
                for(let j=1;j<10;j++){
                    bords[i][j]=copyBords[i][j];
                }
            }
            
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
          dispBord();
          const b=document.createElement('b');
          b.classList.add("iptN");
          b.textContent='・';
          numpreMsg.appendChild(b);
          if(loopCount%80000==0){
      const br=document.createElement('br');
      br.classList.add("iptN");
      numpreMsg.appendChild(br);
          }
          resolve();
        }, 10);
      });
      
      promise.then(function(){
        if(loopCount%320000==0){
    const br=document.createElement('br');
    br.classList.add("iptN");
    const b=document.createElement('b');
    b.classList.add("iptN");
    br.classList.add("iptN");
    b.textContent='解析を中断します';
    numpreMsg.appendChild(b);
    numpreMsg.appendChild(br);
    retry();
    return;
        }else{
        challengeRandom();
        }
      });
      return;
        }
    }
  }