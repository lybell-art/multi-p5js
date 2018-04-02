var sketch=function(d)
{
	d.radius=0;
	d.buho=1;
	d.setup=function()
	{
		d.createCanvas(400,400);
		d.background(255);
	};
	d.draw=function()
	{
		d.ellipse(d.mouseX,d.mouseY,d.radius,d.radius);
		if(d.radius>60||d.radius<0) d.buho=-d.buho;
		d.radius+=d.buho;
	};
};
new p5(sketch,"div_01");
