function cardPick() {
    return Math.floor(Math.random() * 6) + 1;
  }
function cardAction(card, action) {
      switch (card) {
        case 1:
            action = "Мөнгөншагай"
            return action;
        case 2:
            action = "Оюун"
            return action;
        case 3:
            action = "Аззаяа"
            return action;
        case 4:
            action = "Буянбилэг"
            return action;
        case 5:
            action = "Сэргэлэн"
            return action;
        case 6:
            action = "Сэржмядаг"
            return action;
      }
  }

function cardLoad(){
    var card = cardPick(card);
    var action = cardAction(card, action);
    document.getElementById("random").className = "text-2xl";
    document.getElementById("random").innerHTML = "Loading";
            setTimeout(function() {
                document.getElementById("random").innerHTML = "Loading.";
                
            }, 1000);
            setTimeout(function() {
                document.getElementById("random").innerHTML = "Loading..";
                
            }, 2000);
            setTimeout(function() {
                document.getElementById("random").innerHTML = "Loading...";
                
            }, 3000);
            setTimeout(function() {
                if (card == 1) {
                    var audio = new Audio('munguu.wav');
                    audio.play();
                }
                if (card == 2) {
                    var audio = new Audio('Oyun.wav');
                    audio.play();
                }
                if (card == 3) {
                    var audio = new Audio('azaa.wav');
                    audio.play();
                }
                if (card == 4) {
                    var audio = new Audio('buyda.wav');
                    audio.play();
                }
                if (card == 5) {
                    var audio = new Audio('seegii.wav');
                    audio.play();
                }
                if (card == 6) {
                    var audio = new Audio('serj.wav');
                    audio.play();
                }
                document.getElementById("random").className = "text-6xl";
                document.getElementById("random").innerHTML = action;

                
            }, 4000);
    
}