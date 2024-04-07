"use strict";

const idInput=document.getElementById('login-id');
const passInput=document.getElementById('login-pass');
const getId=document.getElementById('get-id');
const logout=document.getElementById('log-out');
const login=document.getElementById('log-in');
const loginMsg=document.getElementById('login-msg');
window.sessionStorage.setItem(['loginMsg'],['ようこそ']);
const hid=document.getElementById('hd');
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
        spanPass.textContent='パスワード：';
        inputPass.type='password';
        button.textContent='ログイン';

        p0.appendChild(span0);
        loginMsg.appendChild(p0);
        p1.appendChild(spanId);
        loginMsg.appendChild(p1);
        loginMsg.appendChild(inputId);
        p2.appendChild(spanPass);
        loginMsg.appendChild(p2);
        loginMsg.appendChild(inputPass);
        p3.appendChild(button);
        loginMsg.appendChild(p3);

    }
  })
  