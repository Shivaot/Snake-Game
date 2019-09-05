//1.init
function init(){
    canvas = document.getElementById('mycanvas');
    pen = canvas.getContext('2d');
    W = canvas.width;
    H = canvas.height;
    food = getFood();

    snake = {
        init_length:5,
        color:"yellow",
        cells:[],
        direction:"right",
        createSnake:function(){
            for(var i=this.init_length-1;i>=0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle = this.color;
                pen.strokeStyle = "black";
                pen.lineWidth = 5;
                pen.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                pen.fillRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
            }
        },
        updateSnake:function(){
            headX = this.cells[0].x;
            headY = this.cells[0].y;

            if(headX==food.x && headY==food.y ){
                food = getFood();
            }
            else{
                this.cells.pop();
            }


            if(this.direction=='up'){
                nextX = headX;
                nextY = headY - 1;
            }
            else if(this.direction=='down'){
                nextX = headX;
                nextY = headY + 1;
            }
            else if(this.direction=='right'){
                nextX = headX + 1;
                nextY = headY;
            }
            else{
                    nextX = headX -1;
                    nextY  = headY;
            }
            
            // nextX = headX + 1;
            this.cells.unshift({x:nextX,y:nextY});

        }
    
    }

   
    
    snake.createSnake();

    document.addEventListener('keydown',Keypressed);
   
    // console.log('init');

}

//2.draw
function draw(){
    console.log('draw');
    pen.clearRect(0,0,W,H);
    // pen.fillStyle = "green";
    pen.fillStyle = food.color;
    pen.fillRect(food.x*10,food.y*10,10,10);
    snake.drawSnake();
}
//3.update
function update(){
    snake.updateSnake();
    
    // console.log('update');
}

function Keypressed(e){
    if(e.key == 'ArrowUp'){
        snake.direction = "up";
    }
    else if(e.key == 'ArrowDown'){
        snake.direction = 'down';
    }
    else if(e.key == 'ArrowLeft'){
        snake.direction = 'left';
    }
    else{
        snake.direction = 'right';
    }

}

function getFood(){
    foodX = Math.round(Math.random()*(W-10)/10);
    foodY = Math.round(Math.random()*(H-10)/10);

    foodColors = ["red","green","yellow","blue"];
    var i = Math.round(Math.random()*foodColors.length);

    food = {
        x:foodX,
        y:foodY,
        color:foodColors[i]
    }
    return food;
}
//4.gameLoop
function gameLoop(){
    draw();
    update();
}
init();
setInterval(gameLoop,100);
