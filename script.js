var video = document.querySelector('#video');

var getUserMedia = (navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia).bind(navigator);

var mediaStream;
function iniciaVideo (stream) {
  video.srcObject = stream;
  mediaStream = stream;
}

function trataErroMedia (erro) {
  console.error('Erro: ' + erro);
}

var configuracaoMedia = {video: {optional: [{maxWidth: 320},{maxHeight: 240}]}, audio: false};

getUserMedia(configuracaoMedia, iniciaVideo, trataErroMedia);

var canvas = document.querySelector('#canvas');
canvas.width = 320;
canvas.height = 240;

var botaoTiraFoto = document.querySelector('#tira-foto');
botaoTiraFoto.addEventListener('click', function (e) {
  if (mediaStream) {
    canvas.getContext('2d').drawImage(video, 0, 0, 320, 240);
    var dados = canvas.toDataURL('image/png');
    //fazer algo com os dados...
    mediaStream.getVideoTracks().forEach(function (media) {
      media.stop();
    });
    video.style.display = 'none';
    canvas.style.display = '';
    mediaStream = null;
  } else {
    getUserMedia(configuracaoMedia, iniciaVideo, trataErroMedia);
    video.style.display = '';
    canvas.style.display = 'none';
  }
});

