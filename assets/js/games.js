/* Индекс слайда по умолчанию */
let GamesSlideIndex = 1;
GamesShowSlides(GamesSlideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function NextGame() {
    GamesShowSlides(GamesSlideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function PrevGame() {
    GamesShowSlides(GamesSlideIndex -= 1);
}

/* Устанавливает текущий слайд */
function GamesCurrentSlide(n) {
    GamesShowSlides(GamesSlideIndex = n);
}

/* Основная функция сладера */
function GamesShowSlides(n) {
    let i;
    let GamesSlides = document.getElementsByClassName("games__item");
    let GameDots = document.getElementsByClassName("games-dots_item");
    if (n > GamesSlides.length) {
        GamesSlideIndex = 1
    }
    if (n < 1) {
        GamesSlideIndex = GamesSlides.length
    }
    for (i = 0; i < GamesSlides.length; i++) {
        GamesSlides[i].style.display = "none";
    }
    for (i = 0; i < GameDots.length; i++) {
        GameDots[i].className = GameDots[i].className.replace(" active", "");
    }
    GamesSlides[GamesSlideIndex - 1].style.display = "block";
    GameDots[GamesSlideIndex - 1].className += " active";
}