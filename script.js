// ==========================================
// PAKISTAN INDEPENDENCE DAY EXPERIENCE
// ==========================================

const startScreen = document.getElementById("startScreen");
const animation = document.getElementById("animation");
const startButton = document.getElementById("startButton");
const music = document.getElementById("music");


// ==========================================
// START EXPERIENCE
// ==========================================

startButton.addEventListener("click", async () => {

    // Hide start screen
    startScreen.style.display = "none";

    // Show animation
    animation.classList.remove("hidden");

    // Restart animation
    animation.style.animation = "none";

    // Force browser to refresh animation
    void animation.offsetWidth;

    // Start animation
    animation.style.animation = "";

    // Start music
    try {

        music.currentTime = 0;

        await music.play();

    } catch (error) {

        console.log(
            "Music could not autoplay:",
            error
        );

    }

});


// ==========================================
// WHEN MUSIC ENDS
// ==========================================

music.addEventListener("ended", () => {

    console.log(
        "Independence Day music finished."
    );

});


// ==========================================
// KEYBOARD SHORTCUT
// Press SPACE to start
// ==========================================

document.addEventListener("keydown", (event) => {

    if (
        event.code === "Space" &&
        startScreen.style.display !== "none"
    ) {

        event.preventDefault();

        startButton.click();

    }

});