/* Индекс слайда по умолчанию */
let MultiGamesSlideIndex = 1;
MultiGamesShowSlides(MultiGamesSlideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function MultiNextGame() {
    MultiGamesShowSlides(MultiGamesSlideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function MultiPrevGame() {
    MultiGamesShowSlides(MultiGamesSlideIndex -= 1);
}

/* Устанавливает текущий слайд */
function MultiGamesCurrentSlide(n) {
    MultiGamesShowSlides(MultiGamesSlideIndex = n);
}

/* Основная функция сладера */
function MultiGamesShowSlides(n) {
    let i;
    let MultiGamesSlides = document.getElementsByClassName("multi-games__item");
    let MultiGameDots = document.getElementsByClassName("multi-games-dots_item");
    if (n > MultiGamesSlides.length) {
        MultiGamesSlideIndex = 1
    }
    if (n < 1) {
        MultiGamesSlideIndex = MultiGamesSlides.length
    }
    for (i = 0; i < MultiGamesSlides.length; i++) {
        MultiGamesSlides[i].style.display = "none";
    }
    for (i = 0; i < MultiGameDots.length; i++) {
        MultiGameDots[i].className = MultiGameDots[i].className.replace(" active", "");
    }
    MultiGamesSlides[MultiGamesSlideIndex - 1].style.display = "block";
    MultiGameDots[MultiGamesSlideIndex - 1].className += " active";
}