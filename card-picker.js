function cardPicker(random) {
    fetch("deck-info.json")
        .then(r => r.json())
        .then(deck => {
            $("#card-result-img").setAttribute("src", deck[random].src);
            $("#card-result-text").innerHTML.replace(deck[random].text);

        })
}

$("#pick-a-card").addEventListener("click", function() {
    request = new Request("http://www.random.org/integers/?num=1&min=0&max=77&col=1&base=10&format=plain&rnd=new")
    
    fetch(request)
        .then(r => r.json())
        .then(r =>  cardPicker(r) )
        .catch(err => console.error(err))
    
})