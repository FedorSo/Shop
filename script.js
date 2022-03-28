// function print_contact(){

//     const skype= "helper";
//     const telegram= "@helper";

//     alert(`Skype: ${skype} \nTelegram: ${telegram} \nТел. 8901006029`);

//     console.log("Пользователь обратилься в техническую поддержку");
// }

// function free_prize(){

//     alert("Поздравляем!\nВы получили подарок\nПерейдите по этой ссылке https://www.minecraft.net/ru-ru/download\nЧтобы забрать подарок");

//     console.log("Пользователь взял подарок");
// }

// Рейтинг

let siteRating = 0;

function star(starNumber) {

    siteRating = starNumber;

    starNumber = starNumber - 1;

    // console.log(starNumber);

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    // console.log(ids[starNumber]);

    let star = document.getElementById(ids[starNumber]);

    // console.log(star);

    if (star.src.includes("Images/star_2.png")){

        for (let i = 0; i <= starNumber; i++){
            let id = ids[i];
            document.getElementById(id).src = "Images/star_1.png";     
        }

    }

    else {

        for (let i = 0; i < ids.length; i++){
            if (i > starNumber) {
                let id = ids[i];
                document.getElementById(id).src = "Images/star_2.png";

            }
        }
    }
}

// Сброс рейтинга

function resetRating() {

    siteRating = 0;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];


    for (let i = 0; i < ids.length; i++){
        let id = ids[i];
        document.getElementById(id).src =  "Images/star_2.png";
    }
}

// Отправка рейтинга

const setRatingBtn = document.getElementById("sendRating");

setRatingBtn.addEventListener("click", function (){

    let text = "";

    switch (siteRating) {
        case 1:
            text = "Мы ожидали чего-то большего.\nВы поставили 1 Балл";
            break;
        case 2:
            text = "Спасибо за ваш отзыв!\nВы поставили 2 Балла";
            break
        case 3:
            text = "Удволетворительно!\nВы поставили 3 Балла";
            break
        case 4:
            text = "Спасибо что вы поставили 4 балла!";
            break
        case 5:
            text = "Мы очень рады что вы поставили 5 баллов!";
            break
        default:
            text = "Пожалуйста поставте оценку сайта";
            break
    }
    // console.log("Рейтинг отправлен!");
    document. getElementById("ratingText").innerText = text;

})

function rand_tshirt() {
    // console.log("Привет");

    
}

// Подарок

const modalGift = document.getElementById("myModal");
const openGift = document.getElementById("myBtn");
const closeGift = document.getElementById("close");

openGift.onclick = function (){
    modalGift.style.display = "block";
    // console.log("Модальное окно");
}

closeGift.onclick = function (){
    modalGift.style.display = "none";
}

// Тех. поддержка

const modalTp = document.getElementById("modalTp");
const openTp = document.getElementById("btnTp");
const closeTp = document.getElementById("closeTp");

openTp.onclick = function (){
    modalTp.style.display = "block";
//     console.log("Модальное окно");
}

closeTp.onclick = function (){
    modalTp.style.display = "none";
}

window.onclick = function (event){

    if (event.target === modalGift) {
        modalGift.style.display = "none";
    }

    if (event.target === modalTp) {
        modalTp.style.display = "none";
    }
}