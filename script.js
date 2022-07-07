// Рейтинг

let siteRating = 0;

function star(starNumber) {

    siteRating = starNumber;

    starNumber = starNumber - 1;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    let star = document.getElementById(ids[starNumber]);

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
    document. getElementById("ratingText").innerText = text;

})

function rand_tshirt() {

    const arr = ["Images/tshirt-1.jpg", "Images/tshirt-2.jpg", "Images/tshirt-3.jpg", "Images/tshirt-6.png", "Images/tshirt-9.png", "Images/tshirt-11.png", "Images/tshirt-12.png","Images/tshirt-13.png", "Images/tshirt-14.png", "Images/tshirt-15.png", "Images/tshirt-16.png"];

// Первая картинка
    let rand = Math.floor(Math.random() * arr.length);

    document.getElementById("ts-image-1").src = arr.splice(rand, 1)[0];


// Вторая карминка
    rand = Math.floor(Math.random() * arr.length);

    document.getElementById("ts-image-2").src = arr.splice(rand, 1)[0];

}

// Подарок

const modalGift = document.getElementById("myModal");
const openGift = document.getElementById("myBtn");
const closeGift = document.getElementById("close");

openGift.onclick = function (){
    modalGift.style.display = "block";
}

closeGift.onclick = function (){
    modalGift.style.display = "none";
}

modalGift.onclick = function (event){
    if (event.target === modalGift) {
        modalGift.style.display = "none";
    }
}

// Тех. поддержка

const modalTp = document.getElementById("modalTp");
const openTp = document.getElementById("btnTp");
const closeTp = document.getElementById("closeTp");

openTp.onclick = function (){
    modalTp.style.display = "block";
}

closeTp.onclick = function (){
    modalTp.style.display = "none";
}

modalTp.onclick = function (event){
    if (event.target === modalTp) {
        modalTp.style.display = "none";
    }
}