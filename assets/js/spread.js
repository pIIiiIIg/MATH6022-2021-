
function opendiv(name1){
var d=name1;
var h=d.offsetHeight;
var maxh=100;
function dmove(){
h+=50; //设置层展开的速度
if(h>=maxh){
d.style.height="auto";
clearInterval(iIntervalId);
}else{
d.style.display='block';
d.style.height=h+'px';
}
}
iIntervalId=setInterval(dmove,2);
}
function closediv(name1){
var d=name1;
var h=d.offsetHeight;
var maxh=300;
function dmove(){
h-=1000;//设置层收缩的速度
if(h<=0){
d.style.display='none';
clearInterval(iIntervalId);
}else{
d.style.height=h+'px';
}
}
iIntervalId=setInterval(dmove,2);
}


function usediv(name1,name2){
var d=name1;
var sb=name2;
if(d.style.display=='none'){
opendiv(name1);
sb.innerHTML='<ins>Fold</ins>';
}else{
closediv(name1);
sb.innerHTML='<ins>Unfold</ins>';
}
}
