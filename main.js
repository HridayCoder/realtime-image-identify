function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EdxgBVwzw/model.json',modelLoaded);
}
function modelLoaded()
{
console.log("model loaded");
}
function draw()
{
image(video,0,0,300,300);
classifier.classify(video,gotResult);
}
function gotResult(error,results)
{
if(error)
{
console.error(error);
}
else
{
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
if(results[0].label=="smartphone")
      {
      document.getElementById("result_object_image").innerHTML="<img src='smartphone.png'width='40px'>"
      }

if(results[0].label=="mug")
      {
      document.getElementById("result_object_image").innerHTML="<img src='mug.png'width='40px'>"
      }

if(results[0].label=="watch")
      {
      document.getElementById("result_object_image").innerHTML="<img src='watch.png'width='40px'>"
      }
}
}