function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kyqBOGx1n/model.json', modelReady);
}


function modelReady() {
    classifier.classify(gotResults);
}