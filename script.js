// ==========================================
// 1. VIDEO POP-UP LOGIK
// ==========================================
const videoModal = document.getElementById("videoModal");
const closeVideoBtn = document.getElementById("closeBtn");
const video = document.getElementById("portfolio-video");
const videoTrigger = document.getElementById("video-trigger");

if (videoTrigger) {
    videoTrigger.onclick = function() {
        videoModal.style.display = "flex";
    }
}

if (closeVideoBtn) {
    closeVideoBtn.onclick = function() {
        videoModal.style.display = "none";
        if (video) video.pause(); // Stoppt das Video nur, wenn es eins gibt
    }
}


// ==========================================
// 2. BILD LIGHTBOX LOGIK
// ==========================================
const imageModal = document.getElementById("imageModal");
const lightboxImg = document.getElementById("lightbox-img");
const closeImageBtn = document.getElementById("closeImageBtn");
const tileImages = document.querySelectorAll(".tile img");

tileImages.forEach(img => {
    img.style.cursor = "pointer"; 
    img.onclick = function() {
        if (lightboxImg && imageModal) {
            lightboxImg.src = this.src;
            imageModal.style.display = "flex";
        }
    }
});

if (closeImageBtn) {
    closeImageBtn.onclick = function() {
        imageModal.style.display = "none";
    }
}


// ==========================================
// 3. GEMEINSAMES SCHLIESSEN (Hintergrund-Klick)
// ==========================================
window.onclick = function(event) {
    if (videoModal && event.target == videoModal) {
        videoModal.style.display = "none";
        if (video) video.pause();
    }
    if (imageModal && event.target == imageModal) {
        imageModal.style.display = "none";
    }
}