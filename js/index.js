document.getElementById('overlay').addEventListener('click', function () {
    var video = document.getElementById('bgvideo');
    video.volume = 0.4;
    video.play().then(() => {
        this.classList.add('fade-out');
    });
});

function animateTitle(title) {
    let originalTitle = title;
    let baseTitle = "@";
    let textToAnimate = originalTitle.slice(1);
    let currentIndex = 0;
    let isRemoving = true;

    function updateTitle() {
        if (isRemoving) {
            document.title = baseTitle + textToAnimate.slice(0, -currentIndex);
            currentIndex++;
            if (currentIndex > textToAnimate.length) {
                isRemoving = false;
                currentIndex = 1;
            }
        } else {
            document.title = baseTitle + textToAnimate.slice(0, currentIndex);
            currentIndex++;
            if (currentIndex > textToAnimate.length) {
                isRemoving = true;
                currentIndex = 1;
            }
        }
    }

    setInterval(updateTitle, 200);
}

animateTitle("@upqt");