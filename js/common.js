$(document).ready(function(){

	 


});
var videoEl = document.getElementsByTagName('video')[0],
            playBtn = document.getElementById('playBtn'),
            modal = document.getElementById('modal'),
            close = document.getElementById('close');

     /*    

			videoEl.ontimeupdate = function () {

				if((Math.round(videoEl.currentTime)) >= 24 && (Math.round(videoEl.currentTime) ) <= 27){
    			
	    			playBtn.classList.remove('hidden');
	    			videoEl.controls = false; 
    			}
    			else {
	    		
	    			playBtn.classList.add('hidden');
	    			videoEl.controls = true;
    			}

			};

*/
        
		 playBtn.addEventListener('timeupdate', function () {

		 	if((Math.round(videoEl.currentTime)) >= 24 && (Math.round(videoEl.currentTime) ) <= 27){
    			
	    			playBtn.classList.remove('hidden');
	    			videoEl.controls = false; 
    			}
    			else {
	    		
	    			playBtn.classList.add('hidden');
	    			videoEl.controls = true;
    			}

		 }, false);

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



       
         
       
       
         
        
         
     