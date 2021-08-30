let int = 1;
//Changing style onload
function classChange() {
    document.getElementById("wrap").className = "bg-gray-50 min-h-screen flex items-center justify-center px-16";
    document.getElementById("card").className = "relative w-full max-w-lg";
    document.getElementById("s1").className = "absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob";
    document.getElementById("s2").className = "absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000";
    document.getElementById("s3").className = "absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000";
    document.getElementById("card-2").className = "m-8 relative space-y-4";
    document.getElementById("card-3").className = "p-5 bg-white rounded-lg flex items-center justify-center space-x-8";
    document.getElementById("random").className = "text-4xl";
    document.getElementById("game").style.display = "none";
}
//Adding player names
function submit() {
    int = document.getElementById("int").value;
    names = document.getElementById("addname").value;
    document.getElementById("name" + int).innerHTML = names;
    int++;
    document.getElementById("int").value = int;
    if (int == 11) {
        document.getElementById("warning").innerHTML = "Max Player Reached";
    }
    console.log(int);
}
function cardPick() {
    players = int - 1;
    return Math.floor(Math.random() * players) + 1;
}
//Connect names with player number.
function cardAction(card, action) {
    switch (card) {
        case 1:
          action = document.getElementById("name1").innerHTML;
          return action;
        case 2:
          action = document.getElementById("name2").innerHTML;
          return action;
        case 3:
          action = document.getElementById("name3").innerHTML;
          return action;
        case 4:
          action = document.getElementById("name4").innerHTML;
          return action;
        case 5:
          action = document.getElementById("name5").innerHTML;
          return action;
        case 6:
          action = document.getElementById("name6").innerHTML;
          return action;
        case 7:
          action = document.getElementById("name7").innerHTML;
          return action;
        case 8:
          action = document.getElementById("name8").innerHTML;
          return action;
        case 9:
          action = document.getElementById("name9").innerHTML;
          return action;
        case 10:
          action = document.getElementById("name10").innerHTML;
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
                document.getElementById("random").className = "text-xl";
                document.getElementById("random").innerHTML = action;
            }, 4000);
    
}

function done() {
    document.getElementById("settings").style.display = "none";
    document.getElementById("game").style.display = "initial";
}