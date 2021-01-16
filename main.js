var canvas= new fabric.Canvas ("canvas1");
 player_x=10;
 player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_Update() {
    fabric.Image.fromURL("iron man.jpg", function(Img){
        player_object=Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });

}
function player_Update2(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });

}

window.addEventListener("keydown",keydownn);

function keydownn(e) {
    keypressed=e.keyCode;
    if (e.shiftKey==true && keypressed=='80') {
        console.log("shift+P");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("span1").innerHTML=block_width;
        document.getElementById("span2").innerHTML=block_height;
    }

if (e.shiftKey==true && keypressed=='77') {
console.log("shift+M");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("span1").innerHTML=block_width;
        document.getElementById("span2").innerHTML=block_height;
    }
    
if (keypressed == '38') {
    up();
    console.log("up");
        
    }

    if (keypressed == '40') {
        down();
        console.log("down");
            
        }

if (keypressed == '37') {
    left();
    console.log("left");
        
    }
    
if (keypressed == '39') {

    right();
    console.log("right");}
        
}
if (keypressed == '67') {
    player_Update2("captain.jpg");
    console.log("captain america");
        
    }
    
             
if (keypressed == '84') {
    player_Update2("thor.jpg");
    console.log("thor");
        
    }
             
if (keypressed == '72') {
    player_Update2("hawkeye.jpg");
    console.log("hawkeye");
        
    }
             
if (keypressed == '73') {
    player_Update2("iron man.jpg");
    console.log("iron man");
}
        