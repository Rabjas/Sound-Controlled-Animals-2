
function Check(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QJFCuAgXW/",ModelLoaded);

}
function ModelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error,result){
    if(error){
        console.error(error);
    }
}