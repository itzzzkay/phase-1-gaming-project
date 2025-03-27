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

document.getElementById("gameDescriptionForm")
.addEventListener("submit", (event) => {
    event.preventDefault()

    const Genre = document.getElementById("selectGenre").value.trim()
    const Mode = document.getElementById("selectModee").value.trim()
})

function filterGames() {

}

function displayGames(games) {
    game-displayed.innerHTML = ""

}