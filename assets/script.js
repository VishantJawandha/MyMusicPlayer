var Vishant = document.getElementById('myplayer');


var isPlaying = false;

function togglePlayPause(){

    if(isPlaying){
        Vishant.pause();
        isPlaying = false; 
    }
    else{

        Vishant.play();
        isPlaying = true;
    }
}

    
