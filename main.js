let userSearch = document.getElementById('searchInput')
let bttn = document.getElementById('button')
bttn.addEventListener("click", searchMusic)
console.log(searchInput)
function clearResults(){
  results.innerHTML = "";
}
function searchMusic(){
  let searchMusic = userSearch.value;
  console.log(searchMusic);
  clearResults();
  fetch("https://itunes.apple.com/search?term=" + searchMusic + "&entity=musicTrack")
    .then(function(response){
      if (response.status !== 200){
        console.log('status', response.status)
        return;
      }
    response.json().then(function(data){
      for(i=0;i<20;i++){
        let item = data.results;
        let tmpl =`<div class = "resultBox"><div class = "noneImg"></div> <button id="musicBttn" class="musicButton"><img id="${item[i].previewUrl}" src="${item[i].artworkUrl100}"></img></button><div class = "trackTitle"><a href="">${item[i].trackName}</a></div></div>`;
      document.getElementById('results').innerHTML += tmpl;}

    })
      var playMusic = document.getElementsByClassName('musicButton');
      var playIn = document.getElementById('results').addEventListener('click', function(event){
        event.target = playMusic;
        let addMusic = `<audio src = "${event.target.id}" id = "audio" controls = "controls">`
        return document.getElementById('audioHere').innerHTML = addMusic;
      })
    })
  };
