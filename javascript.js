function startVideoFromCamera(){
    navigator.mediaDevices.getUserMedia({
        video: {
          width: 1280 ,
          height: 720 ,
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

document.querySelector('button').addEventListener('click', () =>{
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0,0);
    let imgURL = canvas.toDataURL("image/png");
    imgURLDisplay.innerHTML = `<strong>URL da imagem:</strong> ${imgURL}`;

})

window.addEventListener('DOMContentLoaded', startVideoFromCamera)