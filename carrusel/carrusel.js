var imanges = ['item.png','item2.png','item3.png'],tmp = [];
const change = ()=> {
  var item = ((img = tmp.pop()) == undefined) ? (tmp = imanges.slice()) ? tmp.pop() : '' : img; 
  document.getElementById('carrusel').style.backgroundImage = 'url(img/'+item+')';
}
setInterval(()=> change(),2000);