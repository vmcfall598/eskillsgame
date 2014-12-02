(function() {
var back = 'images/back.png';
var tile = [
['images/img0.png','images/img0.png'],
['images/img1.png','images/img1.png'],
['images/img2.png','images/img2.png'],
['images/img3.png','images/img3.png'],
['images/img4.png','images/img4.png'],
['images/img5.png','images/img5.png'],
['images/img6.png','images/img6.png'],
['images/img7.png','images/img7.png'],
['images/img8.png','images/img8.png'],
['images/img9.png','images/img9.png'],
['images/img10.png','images/img10.png'],
['images/img11.png','images/img11.png'],
['images/img12.png','images/img12.png'],
['images/img13.png','images/img13.png'],
['images/img14.png','images/img14.png']
];

function randOrd(a, b){return (Math.round(Math.random())-0.5);}
var im = []; var tilen = []; for (var i = 0; i < 15; i++) {im[i] = new Image();
 im[i].src = tile[i]; tilen[i] = [];
 tilen[i][0] = '<img src="'+tile[i][0]+'" width="100%" height="100%" \/>'; tilen[i][1]=i;
 tilen[i+15] = [];
 tilen[i+15][0] = '<img src="'+tile[i][1]+'" width="100%" height="100%"  \/>';
 tilen[i+15][1]=i;} function displayBack(i) {
 document.getElementById('t'+i).innerHTML = '<img src="'+back+'" width="100%" height="100%"  \/>';
 document.getElementById('t'+i).onclick=function(){disp(i)};
 }
 var ch1, ch2, tmr, tno, tid, cid, cnt; function begin() {for (var i = 0; i <= 29 ;
 i++) displayBack(i);clearInterval(tid);tmr = tno = cnt = 0;tilen.sort( randOrd );
 cntr();
 tid = setInterval(cntr, 1000);
 }
 function cntr() {
 var min = Math.floor(tmr/60);
 var sec = tmr%60;document.getElementById('cnt').value = min+':'+ (sec<10 ? '0' : '') + sec;
 tmr++;
 } 
 function disp(sel) {
 if (tno>1) {clearTimeout(cid); conceal();
 }
 document.getElementById('t'+sel).innerHTML = tilen[sel][0];
 if (tno==0) ch1 = sel;
 else {
 ch2 = sel;
 cid = setTimeout(conceal, 900);
 }
 tno++;
 }
 function conceal() {
 tno = 0;
 if (tilen[ch1][1] != tilen[ch2][1]) {
 displayBack(ch1);
 displayBack(ch2);
 } else cnt++;
 if (cnt >= 15) clearInterval(tid);
 } 
 function createGame(nm) {var d = document.createElement('div');
 d.align = 'center';var t = document.createElement('table');
 t.cellpadding = 0;t.cellspacing = 0;t.borders = 0;
 for (var a = 0; a <= 5; a++) {
 t.insertRow(a);
 for (var b = 0; b <= 4; b++) {
 t.rows[a].insertCell(b);
 t.rows[a].cells[b].className = 'blk';
 t.rows[a].cells[b].id = 't'+((5*a)+b);
 t.rows[a].cells[b].align = 'center';
 }
 }
 d.appendChild(t);
 var f = document.createElement('form');
 f.id = 'mem';
var bt = document.createElement('form');
 bt.type = 'button';
 bt.id = 'cnt';
 bt.value = '0.00';
 bt.onclick = begin;
 f.appendChild(bt);
 d.appendChild(f);
 document.getElementById(nm).appendChild(d);
 } 
 createGame('memory'); 
 begin();
 /*                 reset                   */
 $("#reset").live('click', function(){
 begin();
 $('#counter').stopwatch().stopwatch('reset');
});
/*        timer           */
$(document).ready(function(){
 $('#counter').stopwatch().stopwatch('start');	 
});
})
();
