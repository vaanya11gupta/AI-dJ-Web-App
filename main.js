song1 = "";
song2 = "";
function preloaded() {
	song1= loadSound("music.mp3");
	song2= loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(600,500);
	canvas.position(400,250);
	
	video = createCapture(VIDEO);
	video.hide();
}
function draw()
{
image(video,0,0,600,500);
}
