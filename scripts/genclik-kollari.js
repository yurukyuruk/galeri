
const popup = document.getElementById("popup");
const honeycomb = document.querySelector(".honeycomb");
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1, 2, 3, 4, 5, 6,7];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const honeycombCell = document.createElement("li");
    honeycombCell.classList.add("honeycomb-cell");
    const image = document.createElement("img");
    image.src = `../images/genclik-kollari/${i}.jpg`;
    image.classList.add("honeycomb-cell_img");
    honeycombCell.addEventListener("click", () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `../images/genclik-kollari/${i}.jpg`;
    })
    honeycombCell.appendChild(image);
    honeycomb.appendChild(honeycombCell); 
})
popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = "";
})
