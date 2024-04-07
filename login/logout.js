"use strict";

const login=document.getElementById('log-in');
const loginMsg=document.getElementById('login-msg');
window.sessionStorage.setItem(['loginMsg'],['ようこそ']);
const hid=document.getElementById('hd');
var msg='';

login.addEventListener("submit",function(){
    var id='ゲスト';
    var pass='1234';
    window.sessionStorage.setItem([id],[pass]);
    msg='ログアウトしました';
    window.sessionStorage.setItem(['loginMessage'],[msg]);
    const span=document.createElement('span');
    span.textContent=msg;
    loginMsg.appendChild(span);
    window.sessionStorage.setItem(['dspID'],[id]);
});
$(window).on('load', function(){
    if(window.sessionStorage.getItem(['loginMessage'])!=null){
        const span=document.createElement('span');
        span.textContent=window.sessionStorage.getItem(['loginMessage']);
        loginMsg.appendChild(span);
        window.sessionStorage.removeItem('loginMessage');
    }else if(window.sessionStorage.getItem(['dspID'])=='ゲスト'){
        const spanMsg=document.createElement('span');
        spanMsg.textContent='ログアウトしています';
        loginMsg.appendChild(spanMsg);
    }
    if(window.sessionStorage.getItem(['dspID'])!='ゲスト'){
        const p3=document.createElement('p');
        const button=document.createElement('button');
    
        button.textContent='ログアウト';
    
        p3.appendChild(button);
        login.appendChild(p3);

    }
//     if(window.sessionStorage.getItem(['dspID'])!='ゲスト'){
//       console.log('判定しています')
//       hid.style="display: none;";
  
//   }
  });
  