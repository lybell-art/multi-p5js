var colorPicker;
var weightSlider;
var resetButton;
var setterPressed;

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(255);
	colorPickerCreate();
	weightSliderCreate();
	resetButtonCreate();
	setterPressed=false;
}

function draw()
{
	noFill();
	stroke(colorPicker.value());
	strokeWeight(weightSlider.value());
	if(mouseIsPressed&&!setterPressed&&mouseY>50)
	{
		line(mouseX,mouseY,pmouseX,pmouseY);
	}
	header();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
	resetButton.position(width-65,5);
}

function colorPickerCreate()
{
	colorPicker=createInput('#000000',"color");
	colorPicker.position(120,5);
	colorPicker.style("border","none");
	colorPicker.style("opacity","0");
	colorPicker.style("width","38px");
	colorPicker.style("height","38px");
	colorPicker.mousePressed(function(){setterPressed=true;});
	colorPicker.mouseReleased(function(){setterPressed=false;});
}

function weightSliderCreate()
{
	weightSlider=createSlider(1,30,1);
	weightSlider.position(10,15);
	weightSlider.style("width","100px");
	weightSlider.mousePressed(function(){setterPressed=true;});
	weightSlider.mouseReleased(function(){setterPressed=false;});
}

function resetButtonCreate()
{
	resetButton=createButton("clear");
	resetButton.position(width-65,5);
	resetButton.style("width","60px");
	resetButton.style("height","40px");
	resetButton.style("border","none");
	resetButton.mousePressed(function(){setterPressed=true;background(255);});
	resetButton.mouseReleased(function(){setterPressed=false;});
}

function header()
{
	noStroke();
	fill(255);
	rect(0,0,width,50);
	fill(240);
	rect(5,5,width-10,40);
	fill(colorPicker.value());
	ellipse(139,24,weightSlider.value(),weightSlider.value());
}
