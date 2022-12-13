let txt_search = document.querySelector('#txt_search');
let iframe = document.querySelector('#ifResult');
let option = document.querySelector('#mp3mp4');
const btn = document.querySelector('#btn_getMedia');

function getMedia(url) {
    iframe.src = `https://convert2mp3s.com/api/single/${option.value}?url=${url}`;
}

txt_search.addEventListener('keyup', (e) => {
	if(e.keyCode == 13) {
      	getMedia(e.target.value);
    }
  
});
btn.addEventListener('click',()=> {
    if(txt_search.value != "")
        getMedia(txt_search.value);
})
