//1.init
function init(){
    canvas = document.getElementById('mycanvas');
    pen = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;

    box={
        x:10,
        y:20,
        w:20,
        h:20,
        s:5,
    }
    // console.log('init');

}
//2.draw
function draw(){
    console.log('draw');
    pen.clearRect(0,0,W,H);
    pen.fillStyle = "green";
    pen.fillRect(box.x,box.y,box.w,box.h);
}
//3.update
function update(){
    box.x += box.s;
    console.log('update');
}
//4.gameLoop
function gameLoop(){
    draw();
    update();
}
init();
setInterval(gameLoop,100);






