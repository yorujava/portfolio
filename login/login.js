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

    console.log('通過しました');
    const id=idInput.value;
    const pass=passInput.value;
    window.sessionStorage.setItem([id],[pass]);
    console.log(window.sessionStorage.getItem([id]));
    hid,this.style="display:none";
    msg='ログインしました';
    const span=document.createElement('span');
    span.textContent=msg;
    loginMsg.appendChild(span);
});