function print_contact(){

    const skype= "helper";
    const telegram= "@helper";

    alert(`Skype: ${skype} \nTelegram: ${telegram} \nТел. 8901006029`);

    console.log("Пользователь обратилься в техническую поддержку");
}

// function free_prize(){

//     alert("Поздравляем!\nВы получили подарок\nПерейдите по этой ссылке https://www.minecraft.net/ru-ru/download\nЧтобы забрать подарок");

//     console.log("Пользователь взял подарок");
// }

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("myBtn");
const closeBtn = document.getElementById("close");

openBtn.onclick = function (){
    modal.style.display = "block";
    console.log("Модальное окно");
}

closeBtn.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event){
    if (event.target === modal) {
        modal.style.display = "none";
    }
}