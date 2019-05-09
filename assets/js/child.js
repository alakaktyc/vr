/* Индекс слайда по умолчанию */
let ChildGamesSlideIndex = 1;
ChildGamesShowSlides(ChildGamesSlideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function ChildNextGame() {
    ChildGamesShowSlides(ChildGamesSlideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function ChildPrevGame() {
    ChildGamesShowSlides(ChildGamesSlideIndex -= 1);
}

/* Устанавливает текущий слайд */
function ChildGamesCurrentSlide(n) {
    ChildGamesShowSlides(ChildGamesSlideIndex = n);
}

/* Основная функция сладера */
function ChildGamesShowSlides(n) {
    let i;
    let ChildGamesSlides = document.getElementsByClassName("child-games__item");
    let ChildGameDots = document.getElementsByClassName("child-games-dots_item");
    if (n > ChildGamesSlides.length) {
        ChildGamesSlideIndex = 1
    }
    if (n < 1) {
        ChildGamesSlideIndex = ChildGamesSlides.length
    }
    for (i = 0; i < ChildGamesSlides.length; i++) {
        ChildGamesSlides[i].style.display = "none";
    }
    for (i = 0; i < ChildGameDots.length; i++) {
        ChildGameDots[i].className = ChildGameDots[i].className.replace(" active", "");
    }
    ChildGamesSlides[ChildGamesSlideIndex - 1].style.display = "block";
    ChildGameDots[ChildGamesSlideIndex - 1].className += " active";
}