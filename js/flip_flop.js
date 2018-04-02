var sketch2=function(d)
{
	d.pan=[];
	d.garo=20;
	d.sero=20;
	d.setup=function()
	{
		d.createCanvas(200,200);
		d.background(255);
		d.pan=new Array(d.sero);
		for(var i=0;i<d.sero;i++)
		{
			d.pan[i]=new Array(d.garo);
		}
		d.createPan();
		console.log(d.pan);
	};
	d.draw=function()
	{
		
	};
	d.createPan=function()
	{
		for(var i=0;i<d.sero;i++)
		{
			for(var j=0;j<d.garo;j++)
			{
				d.pan[i][j]=parseInt(Math.random(2));
			}
		}
	}
};
new p5(sketch2,"div_02");
