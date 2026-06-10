//fadein.js
//フェードイン
export function fadeIn(element) {

    element.style.display = "block";
    element.style.opacity = "0";

    let opacity = 0;

    const timer = setInterval(() => {

        opacity += 0.05;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(timer);
        }

    }, 30);
}