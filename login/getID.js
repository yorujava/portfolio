"use strict";

const idInput=document.getElementById('login-id');
const passInput=document.getElementById('login-pass');
const getId=document.getElementById('get-id');
const logout=document.getElementById('log-out');
const login=document.getElementById('log-in');
const loginMsg=document.getElementById('login-msg');
window.sessionStorage.setItem(['loginMsg'],['ようこそ']);
const hid=document.getElementsByClassName('hd');
var msg='';

login.addEventListener("submit",function(){
    const id=idInput.value;
    const pass=passInput.value;
    if(window.sessionStorage.getItem([id])==null){
    window.sessionStorage.setItem([id],[pass]);
    hid,this.style="display:none";
    msg='ログインしました';
    window.sessionStorage.setItem(['loginMessage'],[msg]);
    const span=document.createElement('span');
    span.textContent=msg;
    loginMsg.appendChild(span);
    window.sessionStorage.setItem(['dspID'],[id]);
    }else{
        msg='そのIDは使われています';
        window.sessionStorage.setItem(['loginMessage'],[msg]);
    }
});
$(window).on('load', function(){
    if(window.sessionStorage.getItem(['loginMessage'])!=null){
        const span=document.createElement('span');
        span.textContent=window.sessionStorage.getItem(['loginMessage']);
        loginMsg.appendChild(span);
        window.sessionStorage.removeItem('loginMessage');
    }else if(window.sessionStorage.getItem(['dspID'])!='ゲスト'){
        const spanMsg=document.createElement('span');
        spanMsg.textContent='ログインしています';
        loginMsg.appendChild(spanMsg);
    }
    if(window.sessionStorage.getItem(['dspID'])!='ゲスト'){
      console.log('判定しています')
      hid,this.style="display: none;";
  
  }
    
  });
  
  
  