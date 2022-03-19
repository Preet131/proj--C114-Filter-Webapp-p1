function preload() {
    
}


function setup() {
    canvas = createCanvas(600, 400)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 400);
    video.hide();
    video.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}


function draw() {
    image(video, 0, 0, 600, 400);
}


function modelLoaded(){
    console.log("posenet Initialised!");
    
}


function gotPoses(results) {

    console.log(results);
}