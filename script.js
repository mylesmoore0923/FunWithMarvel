$(document).ready(function(){


//All code here
let movieList = [
  "Captain America: The First Avenger",
  "Captain Marvel",
  "Iron Man",
  "The Incredible Hulk",
  "Iron Man 2",
  "Thor",
  "The Avengers",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Guardians of the Galaxy Vol. 2",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Black Panther",
  "Spider-Man-Homecoming",
  "Thor: Ragnarok",
  "Ant-Man and the Wasp",
  "Avengers: Infinity War",
]
for  (let i = 0; i < movieList.length; i++){
  let newElement = `<h1>${movieList[i]}</h1>`
  console.log(newElement)

$("#display-area").append(newElement)
}

let movieIronMan = {
    timelinePosition: 3,
    title: "Iron Man",
    moviePoster: "images/poster-ironman.jpg",
    releaseDate: "May 2, 2008",
    releasePosition: 1,
    description: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    budget: "140,000,000",
    gross: "585,174,222",
    rottenTomatoes: "93%"
  }




























//NAVIGATION BAR

$("#nav-home").click(goHome);
function goHome() {
  $("#display-area").empty();
  let homeContent = `
    <div class="navPage">
      <p>Welcome to Fun With Marvel!<p>
      <p>Challenge: Build out this homepage with interesting information.</p>
    </div>
  `
  $("#display-area").append(homeContent)
}

$("#nav-mcu-timeline").click(sortByMCUTimeline);
function sortByMCUTimeline() {
  $("#display-area").empty();
  let sortedMCU = `
    <div class="navPage">
      <p>Challenge: Display here movies sorted by MCU Timeline.<p>
      <p>Hint: "movieListDetailed" array of objects is already sorted by MCU Timeline. Link this nav button to that.</p>
    </div>
  `
  $("#display-area").append(sortedMCU)
}

$("#nav-release-date").click(sortByReleaseDate);
function sortByReleaseDate() {
  $("#display-area").empty();
  let sortedReleaseDate = `
    <div class="navPage">
      Challenge: Display here movies sorted by Release Date.
    </div>
  `
  $("#display-area").append(sortedReleaseDate)
}

$("#nav-credits").click(showCredits);
function showCredits() {
  $("#display-area").empty();
  let credits = `
    <div class="navPage">
      All images, descriptions, and data releated to Marvel on this Website is property of Marvel.
    </div>
  `
  $("#display-area").append(credits)
}



});
