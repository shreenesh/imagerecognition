Webcam.set(
    {
        width:350,
        height:300,
        image_format:'png',
        png_quality:90
    }
);
camera=document.getElementById("camera");
Webcam.attach("#camera"); 

function take_snap(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("version=",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UX3Y-Tfgz/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}