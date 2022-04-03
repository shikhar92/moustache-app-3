function setup(){

c1=createCanvas(400,300);
c1.center();
v1=createCapture(VIDEO);
v1.hide();

pn=ml5.poseNet(v1, modelLoaded);
pn.on('pose',gotPoses)

}

function modelLoaded(){

console.log("model is loaded")

}

nosex=0;
nosey=0;

function gotPoses(results){

if(results.length > 0)
{

nosex= results[0].pose.nose.x-150;
nosey= results[0].pose.nose.y-125;

console.log("nosex="+nosex)
console.log("nosey="+nosey)


}



}


function draw(){

image(v1,0,0,400,300);
image(mp,nosex,nosey,60,30)

}

function takephoto(){

save("moustache.png");

}

function preload()
{

mp=loadImage('https://i.postimg.cc/3NCjgDvJ/m.png');

}