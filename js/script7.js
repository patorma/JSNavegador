// addEventListener("scroll", (e) => {
//     console.log(scrollX, scrollY);
// });

// addEventListener("resize", (e) => {
//     console.log(innerWidth, innerHeight);
//     console.log(outerWidth, outerHeight);
// });

const video = document.getElementById("video"),
    playButton = document.getElementById("play"),
    pauseButton = document.getElementById("pause");

playButton.addEventListener("click", () => {
    video.play();
});

pauseButton.addEventListener("click", () => {
    //no tan solo se escuchan los eventos sino que se pueden ejecutar
    video.pause();
    //playButton.click();
});