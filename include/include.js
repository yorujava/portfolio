
document.addEventListener('DOMContentLoaded',()=>{
    const guestId='ゲスト';
    const guestPass='1234';
    window.sessionStorage.setItem([guestId],[guestPass]);
    window.sessionStorage.setItem(['dspID'],[guestId]);
    console.log("testですよ");
  }, {
    'once': true // 1度だけのイベントリスナーにするオプション
  });
  $(window).on('load', function(){
    const dspId=document.getElementById('login-dsp');
    const span=document.createElement('span');
    var getID=window.sessionStorage.getItem(['dspID'])+' さん';
    span.textContent=getID;
    dspId.appendChild(span);
    console.log(getID);
  })