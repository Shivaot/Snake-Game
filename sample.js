function Keypressed(info){
    console.log("pressed a key");
    console.log(info);
    console.log(info.clientX + ',' + info.clientY );

}



document.addEventListener('mousedown',Keypressed);