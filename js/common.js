$(document).ready(function(){

	 


});
var videoEl = document.getElementsByTagName('video')[0],
            playBtn = document.getElementById('playBtn'),
            modal = document.getElementById('modal'),
            close = document.getElementById('close');


	videoEl.addEventListener("currentTime", function() { playBtn.classList.remove("hidden"); }, true);
	
	videoEl.currentTime = 5.0;
           // if(videoEl.currentTime == 3.0) 
         
               
        playBtn.addEventListener('click', function () {
      
            modal.classList.remove("hidden");
            videoEl.pause();
            playBtn.disabled = true;
           	playBtn.style.opacity = 0.3;

        }, false);
         
        close.addEventListener('click', function () {

        	modal.classList.add("hidden");
            videoEl.play();
            playBtn.disabled = false;
            playBtn.style.opacity = 1;


        }, false);



        videoEl.addEventListener('timeupdate', function () {
         
         //   playBtn.style.display = 'block'; 
        }, false);
         
       
       
         
        
         
     