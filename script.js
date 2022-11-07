let txt_search = document.querySelector('#txt_search');
let iframe = document.querySelector('#ifResult');
let option = document.querySelector('#mp3mp4');

txt_search.addEventListener('keyup', (e) => {
	if(e.keyCode == 13) {
      	let url = e.target.value;
        iframe.src = `https://convert2mp3s.com/api/single/${option.value}?url=${url}`;
    }
  
});
