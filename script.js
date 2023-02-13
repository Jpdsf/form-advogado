

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

const linkUrl = document.querySelector('#link-foto');

const buttonFoto = document.querySelector('#foto-tirar');
if(!buttonFoto){
 console.log('a')
}else{
  buttonFoto.addEventListener('click', () =>{
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0,0);
    let imgURL = canvas.toDataURL("image/png");    
    linkUrl.innerHTML = imgURL;
    imgURLDisplay.innerHTML = `<strong>URL da imagem:</strong> ${imgURL}`;

})
}


const startButton = document.getElementById('start-video');

if(!startButton){
  console.log('a')

}else{
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
}








if(!startVideoFromCamera()){
  console.log('Sem camêra')
}else{
  window.addEventListener('DOMContentLoaded', startVideoFromCamera)
}







