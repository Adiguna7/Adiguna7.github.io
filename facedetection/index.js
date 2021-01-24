'use strict'

document.getElementById('video').setAttribute("width", 600);
document.getElementById('video').setAttribute("height", 450);

function onCvLoaded () {
    console.log('cv', cv);
    cv.onRuntimeInitialized = onReady;
}
const video = document.getElementById('video');
const actionBtn = document.getElementById('actionBtn');
const note = document.getElementById('note');
const width = 600;
const height = 450;
const FPS = 30;        

let stream;
let streaming = false;
function onReady () {
    let src;
    let dst;

    let faceClassifier = new cv.CascadeClassifier();
    let eyeClassifier = new cv.CascadeClassifier(); 
    let utils = new Utils('errorMessage');

    let faceCascadeFile = 'haarcascade_frontalface_default.xml';            
    let eyeCascadeFile = 'haarcascade_eye.xml';
    
    utils.createFileFromUrl(faceCascadeFile, faceCascadeFile, () => {
        faceClassifier.load(faceCascadeFile);
    });

    utils.createFileFromUrl(eyeCascadeFile, eyeCascadeFile, () => {
        eyeClassifier.load(eyeCascadeFile);
    });

    let faces = new cv.RectVector();
    let eyes = new cv.RectVector();

    let gray = new cv.Mat();

    const cap = new cv.VideoCapture(video);

    actionBtn.addEventListener('click', () => {
        if (streaming) {
            stop();
            actionBtn.textContent = 'Start';
            note.textContent = '*Start button untuk memulai facedetection dan membuka camera';
        } else {
            start();
            actionBtn.textContent = 'Stop';
            note.textContent = '*Stop button untuk menutup camera';
        }
    });            

    function start () {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(_stream => {
            stream = _stream;
            console.log('stream', stream);
            video.srcObject = stream;
            video.play();
            streaming = true;
            src = new cv.Mat(height, width, cv.CV_8UC4);
            dst = new cv.Mat(height, width, cv.CV_8UC1);
            setTimeout(processVideo, 0)
        })
        .catch(err => console.log(`An error occurred: ${err}`));
    }

    function stop () {
        if (video) {
            video.pause();
            video.srcObject = null;
        }
        if (stream) {
            stream.getVideoTracks()[0].stop();
        }
        streaming = false;
    }

    function processVideo () {
        if (!streaming) {
            src.delete();
            dst.delete();
            return;
        }
        const begin = Date.now();
        cap.read(src)
        src.copyTo(dst);
        cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);
        // detect faces.
        faceClassifier.detectMultiScale(gray, faces, 1.1, 3, 0);
        // draw faces.
        for (let i = 0; i < faces.size(); ++i) {
            let roiGray = gray.roi(faces.get(i));
            let roiDst = dst.roi(faces.get(i));
            let point1 = new cv.Point(faces.get(i).x, faces.get(i).y);
            let point2 = new cv.Point(faces.get(i).x + faces.get(i).width,
                                    faces.get(i).y + faces.get(i).height);
            cv.rectangle(dst, point1, point2, [255, 0, 0, 255]);
            // detect eyes in face ROI
            eyeClassifier.detectMultiScale(roiGray, eyes);
            for (let j = 0; j < eyes.size(); ++j) {
                let point1 = new cv.Point(eyes.get(j).x, eyes.get(j).y);
                let point2 = new cv.Point(eyes.get(j).x + eyes.get(j).width,
                                        eyes.get(j).y + eyes.get(j).height);
                cv.rectangle(roiDst, point1, point2, [0, 0, 255, 255]);
            }
            roiGray.delete(); roiDst.delete();
        }
        cv.imshow('canvasOutput', dst);
        const delay = 1000/FPS - (Date.now() - begin);
        setTimeout(processVideo, delay);
    }
}