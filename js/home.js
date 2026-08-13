// Fondo de la portada
const heroImages = [
    "ban01.jpg",
    "ban02.jpg",
    "ban03.jpg",
    "ban04.jpg",
    "ban05.jpg",
    "ban06.jpg"
];

const elementColors = {
    Fire:       "rgba(230, 57, 70, 0.5)",
    Earth:      "rgba(190, 82, 43, 0.5)",
    Electricity:"rgba(245, 213, 71, 0.5)",
    Nature:     "rgba(76, 175, 80, 0.5)",
    Water:      "rgba(33, 150, 243, 0.5)",
    Air:        "rgba(184, 224, 255, 0.5)",
    Poison:     "rgba(156, 39, 176, 0.5)",
    Metal:      "rgba(158, 158, 158, 0.5)",
    Guardian:   "rgba(96, 125, 139, 0.5)",
    Beast:      "rgba(121, 85, 72, 0.5)",
    Intellect:  "rgba(63, 81, 181, 0.5)",
    Instinct:   "rgba(255, 152, 0, 0.5)",
    Science:    "rgba(0, 188, 212, 0.5)",
    Alchemy:    "rgba(139, 195, 74, 0.5)",
    Light:      "rgba(255, 241, 118, 0.5)",
    Darkness:   "rgba(74, 20, 140, 0.5)",
    Divine:     "rgba(255, 251, 4, 0.8)"
};

const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
document.querySelector(".hero").style.backgroundImage =
    `url("images/${randomImage}")`;

const featured = document.getElementById("featured-container");

// Mezclar las ilustraciones aleatoriamente
const randomArtworks = [...artworks].sort(() => Math.random() - 0.5);

// Tomar solo las primeras 8
const selectedArtworks = randomArtworks.slice(0, 10);

selectedArtworks.forEach(artwork => {

    const color1 = elementColors[artwork.elements[0]] || "#111";
    const color2 = artwork.elements.length > 1
            ? elementColors[artwork.elements[1]] || "#111"
            : color1;

    const card = document.createElement("article");
    card.classList.add("card");

    card.style.setProperty("--color1", color1);
    card.style.setProperty("--color2", color2);

    card.innerHTML = `
        <img src="images/${artwork.image}" alt="${artwork.title}">

        <div class="card-info">
        <p class="number">${artwork.number}</p>    
        <h3>${artwork.title}</h3>
            
            <p class="elements">${artwork.elements.join(" x ")}</p>
            <p class="category">${artwork.collection}</p>
            </div>
    `;
    card.addEventListener("click", function(){
        window.location.href = `artwork.html?id=${artwork.id}`;
    });
    featured.appendChild(card);
});






document.addEventListener("contextmenu", e => e.preventDefault());