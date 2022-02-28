function preload(){

}

function setup(){
   canvas = createCanvas(400 , 300);
   canvas.position(110 , 250);

   video = createCapture(VIDEO);
   video.hide();

  
}

function draw(){
   image(video , 0 , 0 , 400 , 300 );
   tint(tint_color);

}

function take_snapshot(){
    save('image.png');
}
