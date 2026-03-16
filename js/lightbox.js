const overlay = document.createElement("div");
overlay.id = "lightbox-overlay";
overlay.setAttribute("role", "dialog");
overlay.setAttribute("aria-modal", "true");
overlay.setAttribute("aria-label", "Image lightbox");

const img = document.createElement("img");
img.id = "lightbox-img";
img.setAttribute("alt", "");

overlay.appendChild(img);
document.body.appendChild(overlay);

function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    img.src = "";
}

overlay.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
        closeLightbox();
    }
});

document.querySelectorAll("img[data-lightbox]").forEach((el) => {
    el.style.cursor = "zoom-in";
    el.addEventListener("click", () => openLightbox(el.dataset.lightbox, el.alt));
});
