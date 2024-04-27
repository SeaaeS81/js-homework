
//3. Створити стрім із мікро і відео (Див. лекцію).

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(function(stream) {
    var video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
  });
 
