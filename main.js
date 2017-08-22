let userSearch = document.getElementById('searchInput')
let bttn = document.getElementById('button')
bttn.addEventListener("click", searchMusic)
console.log(searchInput)

function searchMusic(){
  let searchMusic = userSearch.value;
  console.log(searchMusic);
  fetch("https://itunes.apple.com/search?term=" + searchMusic + "&entity=musicTrack")
    .then(function(response){
      if (response.status !== 200){
        console.log('status', response.status)
        return;
      }
    response.json().then(function(data){
      console.log(data);

      function useData(){
        return`${data.map(data =>
          `<div class = "resultBox"><div class="resultImage"><img src = "${data.artworkUrl60}"></img><div class = "trackTitle"><a href="">${data.trackName}</a></div></div>`
        )}`
        console.log(useData);
      };
      let addResults = `${useData}`
      document.getElementById("results").innerHTML = addResults;
    })
  })
};
