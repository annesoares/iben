function cardPicker(random) {
    if (random < 10) {
        random = "0" + random;
    }
    var src = "img/deck/" + random + ".svg";
    $("#card-result-img").attr("src", src);
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