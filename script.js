const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// PROMPT USER TO SELECT A MEDIA STREAM
//PASS TO VIDEO ELEMENT AND PLAY
async function selectMediaSteam() {
    try {
        // setting var to SCREEN CAPTURE API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Setting the source of video to the screen capture API
        videoElement.srcObject = mediaStream;
        // When video has loaded feed/stream then play
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }


    } catch (error) {
        //Catch errors
        console.log("Error with selectMediaSteam()", error);
    }
}

buttonElement.addEventListener('click', async ()=>{
    //disable button when clicked
    buttonElement.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    buttonElement.disabled = false;

});


//ON LOAD
selectMediaSteam();