prediction1=""
pradiction2=""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

   camere = document.getElementById("camera");
    
   Webcam.attach( '#camera' );


   function takesnapshot()
   {
       Webcam.snap(function(data_uri) {
           document.getElementById("picture").innerHTML = '<img src="'+data_uri+'" id="finished_image"></img>'
       }
       
       )
    };

    console.log('ml5 version:', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BVIzty9Xo/model.json',modelLoaded);

    function modelLoaded() {
    console.log('model loaded!');
    }

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction1;
    speak_data_2 = "And the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis); 
}
function check()
{
  img = document.getElementById('finished_image');
  classifier.classify(img, gotResults);  
}

function gotResults(error, results)
{
if (error){
    console.error(error);
}else{
    console.log(results)
}
prediction1=results[0].label;
prediction2=results[1].label;
speak()
document.getElementById("emotion1").innerHTML=prediction1
document.getElementById("emotion2").innerHTML=prediction2
if (prediction1=="happy")
{
    document.getElementById("emoji1").innerHTML="&#128522";
}
if (prediction1=="sad")
{
    document.getElementById("emoji1").innerHTML="&#128532";
}if (prediction1=="ANGRY")
{
    document.getElementById("emoji1").innerHTML="😡";
}

if (prediction2=="happy")
{
    document.getElementById("emoji2").innerHTML="&#128522";
}
if (prediction2=="sad")
{
    document.getElementById("emoji2").innerHTML="&#128532";
}if (prediction2=="ANGRY")
{
    document.getElementById("emoji2").innerHTML="😡";
}

}