<html>
  <head>
    <script>
      function openCamera() {
        // Verifica se o navegador suporta a API de câmera
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Obtém a referência à câmera traseira
          navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
          }).then(function(stream) {
            // Atribui o stream da câmera ao elemento de vídeo
            var videoElement = document.getElementById("camera");
            videoElement.srcObject = stream;
            videoElement.play();
          }).catch(function(error) {
            console.error("Erro ao acessar a câmera: ", error);
          });
        } else {
          console.error("Este navegador não suporta a API de câmera");
        }
      }
    </script>
  </head>
  <body>
    <button onclick="openCamera()">Abrir Câmera</button>
    <br>
    <video id="camera" width="400" height="300"></video>
  </body>
</html>