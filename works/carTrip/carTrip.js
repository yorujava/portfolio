// $(function(){
//     $("#carTripPy").load("carTripPy.html"); 
//   }
// );
const pyLoad=document.getElementById('pyLoad');
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
});
