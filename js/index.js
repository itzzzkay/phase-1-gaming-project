const URL = "http://localhost:3000/games"

document.addEventListener("DOMContentLoaded", getGameData)

function getGameData() {
    fetch(URL)
    .then((res) => {
        if (!res.ok) {
            throw new Error(response);
        }
        return res.json();
    })
    .then((games) => {
        displayGames(games)
    })
}

