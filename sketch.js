const li = 100; // Width of the Cell
const col = 100; // Height of the cell
const transh = col/3; //col/2; // translation in h direction
const transv = li/3; //li/2; // translation in v direction
let rot = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rot = PI/6;
	background(10,80,80);
	display();
}

function draw() {
	
}

display = function(){
	let comptx = 0;
	let compty = 0;
	noStroke();
	for(var j=0; j < height+li; j+=li){
		for(var i=0; i < width+col; i+=col){
			push();
			fill(255,100);
			translate(i,j);
			
			if(comptx%2==0){
				translate(0,transv);
			}
			if(compty%2==0){
				translate(transh,0);
			}

			rotate(rot);
			rectMode(CORNER);
			strokeWeight(1);
			stroke(255,50);
//			rect(0,0,10,10);
			ellipse(0,0,10,10);
			pop();
			comptx++;

			}
		comptx=0;
		compty++;     
	}
}