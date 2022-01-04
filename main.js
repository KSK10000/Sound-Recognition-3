Dog=0;
Cat=0;
function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dZErz09RX/model.json',modelloaded);
}
function modelloaded(){
    console.log("Your Model Is Successfully Loaded");
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("hear").innerHTML="Detected Voice Is "+results[0].label;
        document.getElementById("count").innerHTML="Detected Dog "+Dog+" Detected Cat "+Cat;
        document.getElementById("hear").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("count").style.color="rgb("+r+","+g+","+b+")";
        img=document.getElementById("img1");
        if(results[0].label=="Dog"){
            img.src="bark.gif";
            Dog=Dog+1;
        }
        else if (results[0].label=="Cat"){
            img.src="meow.gif";
            Cat=Cat+1;
        }
        else{
            img.src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}