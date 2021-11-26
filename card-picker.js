function deckBuilder() {
    var deck, temp = [], t, i, j;
    var major = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];
    var minor = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "P", "J", "Q", "K"];
    var suits = ["F", "W", "E", "A"];

    deck = major;

    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < minor.length; j++) {
            temp[j] = minor[j] + suits[i];
            deck.push(temp[j]);
        }
        temp = [];
    }
    
    return deck;
}

function cardPicker(random) {
    var deck = deckBuilder();
    $("card-result-img").src = "/img/deck/" + deck[random] + ".png";
}

$("#pick-a-card").click(function() {
    $.ajax({
        "type": "GET",
        "url": "http://www.random.org/integers/?num=1&min=0&max=77&col=1&base=10&format=plain&rnd=new",
        "success": function( data, status, xhr ){
            cardPicker(parseInt(data));
        }
    });  
})