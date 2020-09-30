

$(document).ready(function () {
	// get video element
	myvideo = document.getElementById('myvideo');
})

$('div').on('click', function () {
    console.log(this.id);
    $(myvideo).attr('src', 'videos/'+this.id+'.mp4');
});


function fullscreen() {
	myvideo.webkitRequestFullScreen();
}


function playpausefun() {
	if (myvideo.paused) {
		myvideo.play();
		playpausebtn.value = 'Pause';
	} else {
		myvideo.pause();
		playpausebtn.value = 'Play';
	}
}