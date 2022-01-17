function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = m15.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

song="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function prelead(){
    song = loadSound("music.mp3");
}


function draw(){
    image(video , 0 , 0 , 600, 500);   
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log('PoseNet is Intialized');
}

function gotPoses(){
    if(results.length > 0);
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY ="+ leftWristY);

        rightWristX =results[0].pose.rightWristX.x;
        rightWristY =results[0].pose.rightWristX.y;
        console.log("rightWristX = " + rightWristX + "rightWristY ="+ rightWristY);
        }
}

function draw(){
    image(video,0,0,600,500);
    fill ("ff0000");
    stroke("ff0000");
    if(scoreleftWrist>0.2);
    circle(leftWristX , leftWristY ,20);
    InNumberleftwristY = Number(leftWristY);
    remove_deciamls = floor(InNumberleftwristY);
    voulume = remove_deciamls/500;
    document.getElementById("voulume").innerHTML = "voulume =" +voulume;
    song.setVolume(voulume);
}
