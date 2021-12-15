function cardPicker(random) {
    $.getJSON("deck-info.json", function(deck) {
        $("#card-result-img").attr("src", deck[random].src);
        $("#card-result-text").innerHTML(deck[random].text);
    });
}

$("#pick-a-card").click(function() {
    $.ajax({
        "type": "GET",
        "url": "http://www.random.org/integers/?num=1&min=0&max=77&col=1&base=10&format=plain&rnd=new",
        "success": function (data, status, xhr) {
            cardPicker(parseInt(data));
        }
    });  
})