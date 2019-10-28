//Set up all variables that needed for this sketch. (including startPoint, length, and hue values)
let startPoint = 0;
let length = 2.5;
let hue = 0;

//set up the foundation.
function setup() {
	createCanvas(600, 600);
	background(0);
	noStroke();
	colorMode(HSB,100);
	textSize(20);
	fill(0,0,100);
}

//Set up the steps.
function draw() {
	
	startPoint = startPoint+length;
	
	if(startPoint > width){
		length = -1*length;
	}
	
	if(startPoint < 0){
		length = -1*length;
	}
	
	//called the rainbowEllipse functions.
	rainbowEllipse(startPoint,height/2,110);
	rainbowEllipse(width/2,startPoint,110);
	rainbowEllipse(startPoint,height-startPoint,110);
	rainbowEllipse(width-startPoint,height-startPoint,110);
	rainbowEllipse(width,height-startPoint,110);
	rainbowEllipse(600-startPoint,height,110);
	rainbowEllipse(600-startPoint,0,110);
	rainbowEllipse(0,600-startPoint,110);
	
	//Set up the white blocks.
	fill(0,0,100);
	ellipse(width/2,height/2,200);
	
	fill(0,0,100);
	square(25,25,150);
	fill(0,0,100);
	square(425,25,150);
	fill(0,0,100);
	square(25,425,150);
	fill(0,0,100);
	square(425,425,150);

}

//Set up rainbowEllipse function.
function rainbowEllipse(x,y,d){
	fill(hue,100,100);
  ellipse(x, y, d);
}

//Some cool effect maybe. (a random circle pops up)
function mouseDragged(){
	background(0);
	ellipseMode(CENTER);
	fill(mouseX, mouseY, 100);
	ellipse(mouseX, mouseY, 100);
}

//More to go. (Changing colors)
function mouseMoved(){
	hue = hue+0.4;
	hue = hue%100;
}
