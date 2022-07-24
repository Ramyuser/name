function setup() {
    canvas = createCanvas(480, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 450);
    video.hide()
}

function draw() {
    image(video, 0, 0, 480, 450);
}
video = "";

function preload() {

}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementsById("status").innerHtml = "Status: Detecing Objects";
    document.getElementById("Object_name").value;
}


function modelLoaded() {
    console.log("model Loaded");
    status = true;

}