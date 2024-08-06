const apikey = import.meta.env.VITE_API_KEY;

const btnListener = document.getElementById("btnSearch");
btnListener.addEventListener("click", () => {
  const movieNameToSearch = document.getElementById("searchMovie").value;
  console.log(movieNameToSearch);
  fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${movieNameToSearch}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const mvPoster = document.getElementById("moviePoster");
      console.log(data.Poster, data.Title, data.Year);

      mvPoster.src = data.Poster;
      document.getElementById("movieTitle").innerHTML = data.Title;
      document.getElementById("releaseYear").innerText = data.Year;

      // add new button after Movie fetch
      const container = document.getElementById("movieInfo");
      const newButton = document.createElement("button");
      newButton.textContent = "More Info";
      newButton.id = "btnMoreInfo";
      container.appendChild(newButton);

      // Clear Additional information balank
      const h2Elements = document.querySelectorAll("#moreInfo h2 span");
      // Loop through each h2 element and set innerText to ""
      h2Elements.forEach((span) => {
        span.innerText = "";
      });

      // add event listner on getMoreInfo button
      const btnMoreInfo = document.getElementById("btnMoreInfo");
      btnMoreInfo.addEventListener("click", () => {
        console.log("Hello from MoreInfo");
        console.log(data.Actors);
        document.getElementById("releasedDate").innerText = data.Released;
        document.getElementById("runtime").innerText = data.Runtime;
        document.getElementById("genre").innerText = data.Genre;
        document.getElementById("director").innerText = data.Director;
        document.getElementById("writer").innerText = data.Writer;
        document.getElementById("actors").innerText = data.Actors;
        document.getElementById("plot").innerText = data.Plot;
        document.getElementById("language").innerText = data.Language;
        document.getElementById("country").innerText = data.Country;
        container.removeChild(newButton);
        document.getElementById("searchMovie").value = "";
        document.getElementById("searchMovie").focus();
      });
    })
    .catch((error) => console.log(`Error Fetching Movie data`, error));
});
