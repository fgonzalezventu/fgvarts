// ======================================================
// Obtener el ID desde la URL
// ======================================================

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const artwork = artworks.find(function(item){
    return item.id === id;
});

const currentIndex = artworks.findIndex(item => item.id === id);
const previousArtwork =
    currentIndex > 0 ? artworks[currentIndex - 1] : null;
const nextArtwork =
    currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

console.log(artwork);

const container = document.getElementById("artwork-container");
container.innerHTML = `
    <section class="artwork-page">
        <div class="artwork-image">
            <img src="images/art/${artwork.image}" alt="${artwork.title}">
        </div>
        <div class="artwork-info">
            <h1 class="card-title">${artwork.title}</h1>

            <div class="artwork-badges">
            <img src="images/badges/${artwork.elements[0].toLowerCase()}.png"
            alt="${artwork.elements[0]}">
            ${
            artwork.elements.length > 1
            ? `<img src="images/badges/${artwork.elements[1].toLowerCase()}.png"
            alt="${artwork.elements[1]}">`
            : ""
            }
            </div>
            
            <p class="number">${artwork.number}</p>
            <p class="collection">${artwork.collection}</p>
            <p class="elements">${artwork.elements.join(" x ")}</p>
            <p class="category"> Category: ${artwork.category}</p>
            <p class="created"> Created: ${artwork.created}</p>
            <p class="description">${artwork.description}</p>
            <div class="artwork-navigation">
                ${previousArtwork
                    ? `<a class="button" href="artwork.html?id=${previousArtwork.id}">← Previous</a>`
                    : `<span></span>`}
                <a class="button" href="gallery.html">Gallery</a>
                ${nextArtwork
                    ? `<a class="button" href="artwork.html?id=${nextArtwork.id}">Next →</a>`
                    : `<span></span>`}
            </div>
        </div>
    </section>
`;