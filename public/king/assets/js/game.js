// King's game Javascript controller
// Author = "Mungunshagai Bayarkhuu"
// Instagram = "munguu_bumi"
// Visit index page to view links to my profile

function cardPick(card) {
    return Math.floor(Math.random() * 16) + 1;
}
function cardAction(card, action) {
    switch (card) {
        case 1:
            action = "Waterfall - Бүх хүн ууна."
            return action;
        case 2:
            action = "Чи - дурын хүн сонгож уулгуулна"
            return action;
        case 3:
            action = "Би - Сугалсан хүн ууна"
            return action;
        case 4:
            action = " Шал - Бүгд уралдаж сугалсан хүний гаран дээр гараа тавина. Хоцорсон хүн шийтгүүлнэ."
            return action;
        case 5:
            action = "Guys - Эрчүүд ууна"
            return action;
        case 6:
            action = "Chicks - Эмэгтэйчүүд ууна"
            return action;
        case 7:
            action = "Heaven - Бүх тоглогч тэнгэрлүү зааж сүүлд биелүүлсэн хүн ууна."
            return action;
        case 8:
            action = "Mate - 3 удаа ямар ч шийтгэл шагнал авсан хамт биелүүлэх хүн өөрийн дураар сонгоно."
            return action;
        case 9:
            action = "Prison - 3 үеийн турш шоронд хоригдно. Шинэ хоригдогч орж ирвэл хүссэнээрээ дарамталж болно."
            return action;    
        case 10:
            action = "Хүссэн уух зүйлээ хааны аяга руу хийнэ. Дүүртэл хийж болохгүй. Дүүрэн байвал шууд ууна."
            return action;
        case 11:
            action = "Never have I ever - Бүгд 3 хуруу гаргаж сугалсан хүнээс эхэлж хийж байгаагүй зүйлээ хэлнэ. Хэлсэн зүйлийг нь хийж байсан хүн 1 хуруугаа буулгаж эхэнд ялагдсан хүн хатуу юм ууна."
            return action;
        case 12:
            action = "Questions - Сугалсан хүн random хүн сонгож асуулт асууна. Асуугдагч дахин сонгож асуулт асуусаар хариулж/асууж чадаагүй хүн ууж дуусна."
            return action;
        case 13:
            action = "Ruler - Хүн болгон заавал мөрдөх зарилаг гаргана. дараагын хаан гарж иртэл хүчинтэй"
            return action;
        case 14:
            action = "Heart: Сэтгэлээ илчилэх - Сугалсан хүн дотроо нуугдсан хүслээ ил болгоно."
            return action;
        case 15:
            action = "Love Room - Random хүн сонгож өрөө эсвэл шүүгээрүү хамт 5 минут орно.(Get number-ийг ашиглана)"
            return action;
        case 16:
            action = "Чөтгөр - Random хүн сонгож хамгийн хорон муухай шийтгэл оногдуул"
            return action;
    }
}

function cardLoad() {
    var card = cardPick(card);
    var action = cardAction(card, action);
    
    if (card == 13) {
        var audio = new Audio('asset/mp3/king.mp3');
        audio.play();
    }
    if (card == 16) {
        var audio = new Audio('asset/mp3/devil.mp3');
        audio.play();
    }

    document.getElementById("card").src = "img/loading.jpg";
            setTimeout(function() {
                document.getElementById("card").src = "img/cards/" + card + ".png";
                document.getElementById("cardAction").innerHTML = action;
                
            }, 500);
}
        function number() {
            var player = document.getElementById('playerCount').value;
            var num = Math.floor(Math.random() * player) + 1;
            document.getElementById("load").classList.add("loader");
            document.getElementById("number").innerHTML = " ";
            setTimeout(function() {

                document.getElementById("load").classList.remove('loader');
                document.getElementById("load").classList.add("text-color-king");
                document.getElementById("number").innerHTML = num + " Will be punished";
            }, 500);
            document.getElementById("playerCount").value = player;
        }