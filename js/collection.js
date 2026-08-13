const totalArtworks = 357;
const grid = document.getElementById("collection-grid");
const collectionTitle = document.getElementById("collection-title");
let published = 0;

if(artworks.length > 0){
    collectionTitle.textContent = artworks[0].collection;
}

for(let id = 1; id <= totalArtworks; id++){

    // Buscar si existe una ilustración con este id
    const artwork = artworks.find(item => item.id === id);

    const card = document.createElement("div");
    card.classList.add("collection-card");

    // Si existe la ilustración
    if(artwork){
        published++;
        card.classList.add("available");
        card.innerHTML = `
            <img src="images/${artwork.image}" alt="${artwork.title}">
            <p>${id}</p>
        `;
        card.addEventListener("click", function(){
            window.location.href = `artwork.html?id=${artwork.id}`;
        });
    }

    // Si no existe
    else{
        card.innerHTML = `
            <img src="images/placeholder.jpg" alt="Unavailable">
            <p>${id}</p>
        `;
    }
    grid.appendChild(card);
}

// Contador superior
document.getElementById("collection-count").textContent =
`${published} / ${totalArtworks} artworks published`;
