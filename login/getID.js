"use strict";

const login=document.getElementById('log-in');
const loginMsg=document.getElementById('login-msg');
window.sessionStorage.setItem(['loginMsg'],['ようこそ']);
const hid=document.getElementById('hd');
var msg='';

login.addEventListener("submit",function(){
    const idInput=document.getElementById('login-id');
    const passInput=document.getElementById('login-pass');
    const id=idInput.value;
    const pass=passInput.value;
    console.log('入力されているのは'+id+pass);
    if(window.sessionStorage.getItem([id])==null){
    window.sessionStorage.setItem([id],[pass]);
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
    if(window.sessionStorage.getItem(['dspID'])=='ゲスト'){
        const p0=document.createElement('p');
        const p1=document.createElement('p');
        const p2=document.createElement('p');
        const p3=document.createElement('p');
        const span0=document.createElement('span');
        const spanId=document.createElement('span');
        const inputId=document.createElement('input');
        const spanPass=document.createElement('span');
        const inputPass=document.createElement('input');
        const button=document.createElement('button');
    
        span0.textContent='タブを閉じるまで有効なIDを作成します。表示名としてのみ利用されます。日本語も可能です。';
        spanId.textContent='セッションID：';
        inputId.type='text';
        inputId.id='login-id';
        inputId.classList.add("login-id");
        spanPass.textContent='パスワード：';
        inputPass.type='password';
        inputPass.id='login-pass';
        inputPass.classList.add("login-pass");
        button.textContent='ゲットID';
    
        p0.appendChild(span0);
        login.appendChild(p0);
        p1.appendChild(spanId);
        login.appendChild(p1);
        login.appendChild(inputId);
        p2.appendChild(spanPass);
        login.appendChild(p2);
        login.appendChild(inputPass);
        p3.appendChild(button);
        login.appendChild(p3);
    
    }
  })
  