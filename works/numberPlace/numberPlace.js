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
var inputNumber=1;
var isFast=true;
const numpreMsg=document.getElementById('numpreMsg');
const run=document.getElementById('run');

if(!isRun){
    for(let i=1;i<10;i++){
        const button=document.createElement('button');
        button.textContent=i;
        button.classList.add(i);
        button.setAttribute("id",'no'+i);
        button.setAttribute('onclick', "inpNum("+i+")");
        button.classList.add("iptN");
        if(i==1&&isFast){
            button.classList.add('numMk');
            isFast=false;
        }
        numpreMsg.appendChild(button);
    }
    const button=document.createElement('button');
    button.textContent='消';
    button.classList.add('0');
    button.setAttribute("id",'no'+'0');
    button.setAttribute('onclick', "inpNum('0')");
    button.classList.add("iptN");
    numpreMsg.appendChild(button);

    const input=document.createElement('input');
    input.value='解かせる';
    input.type='submit';
    input.setAttribute('onclick', "runSlv()");
    input.classList.add("iptN");
    run.appendChild(input);
}
function inpNum(e){
    if(inputNumber===''){
        var hoge='no0';
        const remv=document.getElementById(hoge);
        remv.classList.remove('numMk');
    }else{
    var hoge='no'+inputNumber;
    const remv=document.getElementById(hoge);
    remv.classList.remove('numMk');
    }
    var hoge='no'+e;
    const ad=document.getElementById(hoge);
    ad.classList.add('numMk');
    if(e==0){
        inputNumber='';
    }else{
    inputNumber=e;
}}
  function input(e){
    if(!isRun){
        if(e!=0){
    const ipt=document.getElementById(e);
    const th = document.querySelector('th');
    ipt.textContent=inputNumber;
  }
  }}
  function runSlv(){
    isRun=true;
    const elm = document.getElementsByClassName('iptN');
    if (0 < elm.length) {
        [...elm].forEach(function(v){ return v.remove() })
    }
      
  }
  console.log(isRun);