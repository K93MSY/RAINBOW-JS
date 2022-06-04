var canvas = document.getElementById( "target" ) ;
var hydr = canvas.getContext( "2d" ) ;

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }

canvas.width = window.innerWidth*1
canvas.height = window.innerHeight*1

var per = 0;

var gel = window.innerWidth/2;
var gec = window.innerHeight;

function drw(){
hydr.beginPath () ;
per = 100*Math.random();
syncDelay(500);
console.log(per)
hydr.arc(gel, gec,800*per/100, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;

//ramdom rgba
var a = 255*Math.random()
var b = 255*Math.random()
var c = 255*Math.random()

console.log(a+","+b+","+c)

hydr.strokeStyle = "rgba("+a+","+b+","+c+")" ;
hydr.lineWidth = 30 ;
hydr.stroke() ;
}

setInterval(drw,20);

var music = new Audio('https://letscdn.wawa93.repl.co/dontworry.wav');
var tf=0;
function playmc(){
    if(tf==0){
        music.pause();
        tf=1;
    }
    if(tf==1){
        music.currentTime = 0;
        music.play();
        tf=0;

    }
}