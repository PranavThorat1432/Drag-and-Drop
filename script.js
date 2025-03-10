let lists = document.querySelectorAll(".list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

// Add dragstart event to each list item
lists.forEach((list) => {
    list.addEventListener("dragstart", (e) => {
        selected = e.target;
        e.target.style.opacity = "0.5"; // Visual feedback
    });

    list.addEventListener("dragend", (e) => {
        e.target.style.opacity = "1"; // Reset after drop
    });
});

// Function to handle dragover and drop
function handleDropEvent(box) {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", (e) => {
        if (selected) {
            box.appendChild(selected);
            setTimeout(() => (selected = null), 100);
        }
    });
}

// Add dragover & drop listeners only once
handleDropEvent(rightBox);
handleDropEvent(leftBox);
