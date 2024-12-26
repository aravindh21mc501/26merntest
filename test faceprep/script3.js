document.addEventListener("DOMContentLoaded", () => {
    // Create container
    const moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");

    // Create image box
    const imgBox = document.createElement("div");
    imgBox.classList.add("upcoming-img-box");
    const img = document.createElement("img");
    img.src = "png1.jpg"; // Replace with the actual image path
    img.alt = "Upcoming Movie Poster";
    imgBox.appendChild(img);

    // Create title
    const title = document.createElement("p");
    title.classList.add("upcoming-title");
    title.textContent = "Upcoming Movie";

    // Create buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Create "Book Now" button
    const bookNowBtn = document.createElement("a");
    bookNowBtn.href = "#";
    bookNowBtn.classList.add("btn");
    bookNowBtn.textContent = "Book Now";
    bookNowBtn.onclick = function () {
        alert("Redirecting to the booking page...");
        window.location.href = "booking.html"; // Replace with the actual booking URL
    };

    // Create "Play Trailer" button
    const playTrailerBtn = document.createElement("a");
    playTrailerBtn.href = "#";
    playTrailerBtn.classList.add("btn", "btn-alt");
    playTrailerBtn.textContent = "Play Trailer";
    playTrailerBtn.onclick = function () {
        alert("Playing the trailer...");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // Replace with the actual trailer URL
    };

    // Append buttons to the buttons container
    buttonsDiv.appendChild(bookNowBtn);
    buttonsDiv.appendChild(playTrailerBtn);

    // Append all elements to the container
    moviesContainer.appendChild(imgBox);
    moviesContainer.appendChild(title);
    moviesContainer.appendChild(buttonsDiv);

    // Append the container to the body
    document.body.appendChild(moviesContainer);
});