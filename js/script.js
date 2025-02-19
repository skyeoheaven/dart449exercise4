document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".custom-cursor");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });
    document.addEventListener("mouseover", (e) => {
        if (e.target.matches(".text-link")) {
            cursor.style.backgroundColor = "red";
        } else if (e.target.matches(".image-link")) {
            cursor.style.backgroundColor = "blue";
            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.textContent = "View";
        } else {
            cursor.style.backgroundColor = "black";
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.textContent = "";
        }
    });

    document.querySelectorAll(".image-link").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains("close")) {
            modal.style.display = "none";
        }
    });
});
