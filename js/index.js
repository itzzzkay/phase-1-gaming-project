const URL = "http://localhost:3000/games";

document.addEventListener("DOMContentLoaded", getGameData);

const game_displayed = document.querySelector("#game-displayed");
const output = document.getElementById("output");

let gamesInfo = [];

function getGameData() {
  fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(response);
      }
      return res.json();
    })
    .then((games) => {
      gamesInfo = games;
      displayGames(games);
    })
    .catch((error) => console.error(error));
}

document
  .getElementById("gameDescriptionForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const Genre = document.getElementById("selectGenre").value.trim();
    const Mode = document.getElementById("selectModee").value.trim();

    if (!Genre || !Mode) {
      alert(
        "Stop looking for problems in my website's code!!Jaza form vizuri kijana!"
      );
      return;
    }
    filterGames(Genre, Mode);
  });

function filterGames(Genre, Mode) {
  const suggestion = gamesInfo.filter(
    (games) => game.genre === Genre && games.mode === Mode
  );
}

function displayGames(games) {
  game_displayed.innerHTML = "";
  games.forEach((game) => {
    const gameSpace = document.createElement("div");
    gameSpace.className = "gameSpace";

    const gameGif = document.createElement("img");
    gameGif.src = `${game.image}`;
    gameGif.alt = `${game.name}`;
    gameGif.title = `${game.name}`;

    const gameTitle = document.createElement("span");
    gameTitle.textContent = game.name;

    gameSpace.appendChild(gameGif);
    gameSpace.appendChild(gameTitle);

    game_displayed.appendChild(gameSpace);
  });
}

output.textContent = `We recommend that you check out ${suggestion
  .map((game) => game.title)
  .join(" and ")}.`;
