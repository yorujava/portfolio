"use strict";

const idInput=document.getElementById('login-id');
const passInput=document.getElementById('login-pass');
const getId=document.getElementById('get-id');
const logout=document.getElementById('log-out');
const login=document.getElementById('log-in');
const loginMsg=document.getElementById('login-msg');
const guestId='ゲスト';
const guestPass='1234';
window.sessionStorage.setItem(['loginMsg'],['ようこそ']);
window.sessionStorage.setItem([guestId],[guestPass]);
const hid=document.getElementById('hd');
var msg='';

login.addEventListener("submit",function(){

    console.log('通過しました');
    const id=idInput.value;
    const pass=passInput.value;
    window.sessionStorage.setItem([id],[pass]);
    console.log(window.sessionStorage.getItem([id]));
    hid,this.style="display:none";
    msg='ログインしました';
    const span=document.createElement('span');
    const br=document.createElement('br');
    const a=document.createElement('a');
    span.textContent=msg;
    a.textContent='トップページ';
    a.href="https://yorujava.github.io/portfolio/";
    loginMsg.appendChild(span);
    loginMsg.appendChild(br);
    loginMsg.appendChild(br);
    loginMsg.appendChild(a);
});