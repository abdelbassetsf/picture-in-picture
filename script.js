const video = document.getElementById('video');
const btn = document.getElementById('btn');

// Propmt to select media stream, pass to the video element then play
async function selectMediaStram() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.log('Error!', err.message);
  }
}

btn.addEventListener('click', async () => {
  btn.disabled = true;
  // Requesting PIP
  await video.requestPictureInPicture();
  btn.disabled = false;
});

// On Load
selectMediaStram();
