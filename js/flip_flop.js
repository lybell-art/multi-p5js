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
		d.drawPan();
		if(d.frameCount%5==0) d.shiftPan();
	};
	d.mousePressed=function()
	{
		d.createPan();
	};
	d.createPan=function()
	{
		for(var i=0;i<d.sero;i++)
		{
			for(var j=0;j<d.garo;j++)
			{
				d.pan[i][j]=parseInt(Math.random()*2);
			}
		}
	};
	d.shiftPan=function()
	{
		for(var i=0;i<d.sero;i++)
		{
			d.pan[i][d.garo-1]=parseInt(Math.random()*2);
			for(var j=0;j<d.garo-1;j++)
			{
				d.pan[i][j]=d.pan[i][j+1];
			}
		}
	};
	d.drawPan=function()
	{
		var wid=d.width/d.garo;
		var hei=d.height/d.sero;
		for(var i=0;i<d.sero;i++)
		{
			for(var j=0;j<d.garo;j++)
			{
				if(d.pan[i][j]==0) d.fill(0);
				else d.fill(255);
				d.rect(wid*j,hei*i,wid,hei);
			}
		}
	};
};
new p5(sketch2,"div_02");
