function preload() {
    
}

function draw() {
    image(video, 0, 0, 500, 400);
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.poseNet(video, ModelLoaded);
    PoseNet.on("pose", gotposes);
}

function ModelLoaded(){
    console.log("ModelLoaded");
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("nose x =" + result[0].pose.nose.x);
        console.log("nose y =" + result[0].pose.nose.y);

    }
}

function Take_snapshot(){
    save("img.png");
}
