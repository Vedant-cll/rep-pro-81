canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red"
ctx.lineWidth=1;
ctx.rect(182,122,440,210)
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=9;
ctx.arc(305,200,40,2,4 *Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=9;
ctx.arc(350,250,40,2,4 *Math.PI);
ctx.stroke();


color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=9;
ctx.arc(400,200,40,2,4 *Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=9;
ctx.arc(440,250,40,2,4 *Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=9;
ctx.arc(493,200,40,2,4 *Math.PI);
ctx.stroke();