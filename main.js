const url = "https://itunes.apple.com/search?term=";
let loopArray = [];
let userSearch = "";
let formSearch = document.querySelectorAll('form')[0];


//fetch itunes data
function searchMusic(){
  return fetch(`${url}${userSearch}`)
    .then(function(response){
        return response.json();
      })
    .catch(function (err){
      console.log(err)
    })
  }

  //play song
  function playSong(url){
    let audioPlayer = document.querySelector('.musicPlayer');
    audioPlayer.setAttribute('src', url );
  }

  //single song box
  function singleSong(item){
    return `
      <div class = "resultBox">
       <img src="${item.artworkUrl100}" alt ="${item.artistName}"></img>
       <h4 class="songTitle">
       <button type="submit"
       onclick="playSong('${item.previewUrl}')">${item.trackName}</button>
       </h4>
       <h3>${item.artistName}</h3>
       </div>`
     }

//loop previous function
function formTrackList(){
  let trackList = '';
  for(let i in loopArray){
    trackList += singleSong(loopArray[i]);
  }
  console.log(trackList)
  return trackList;
}

//add trackList to DOM
function addtoDOM(){
  const results = document.querySelector('.resultsContainer');
  results.innerHTML = formTrackList(loopArray);
}

//submit event
formSearch.onsubmit = function(){
  event.preventDefault();
  userSearch=event.target.querySelector('input[name="searchInput"]').value
  searchMusic(userSearch).then(function(data){
    loopArray=data.results;
    addtoDOM(loopArray);

    })
};
