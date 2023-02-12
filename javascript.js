

function startVideoFromCamera(){
    navigator.mediaDevices.getUserMedia({
        video: {
          width:{
            max: 426
          } ,
          height: {
            max: 240
          } ,
          facingMode: {
           exact: 'environment'
          }
        }
      }).then(stream => {

        const videoElemente = document.querySelector('#video')
        videoElemente.srcObject = stream
    }).catch(error => (console.log(error)))
      

}
const imgURLDisplay = document.getElementById('bb');

document.querySelector('#foto-tirar').addEventListener('click', () =>{
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0,0);
    let imgURL = canvas.toDataURL("image/png");
    imgURLDisplay.innerHTML = `<strong>URL da imagem:</strong> ${imgURL}`;

})


const startButton = document.getElementById('start-video');

    startButton.addEventListener('click', function() {
      navigator.mediaDevices.getUserMedia({
        video: {
          width:{
            max: 426
          } ,
          height: {
            max: 240
          } ,
          facingMode: {
            exact: 'environment'
          }
        }
        })
        .then(function(stream) {
          video.srcObject = stream;
          video.setAttribute("playsinline", true);
          video.play();
        })
        .catch(function(error) {
          console.error("Oops. Something is broken.", error);
        });
    });



window.addEventListener('DOMContentLoaded', startVideoFromCamera)


function refreshAndClose() {
  window.opener.location.reload();
  window.close();
}