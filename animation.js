function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function animation(img_url, name) {
    $("body").append(`<img id =${name} width="75" height="75" src=${img_url}>`)
    for (let i = 0; i < 1000; i++) {
        if (getRandomInt(2) > 0){
            $("#"+name).animate({ right: getRandomInt(100)}, 1500)
        } else {
            $("#"+name).animate({ left: getRandomInt(100)}, 1500)
        }
        if (getRandomInt(2) > 0) {
            $("#"+name).animate({ top: getRandomInt(100)}, 1500)
        } else {
            $("#"+name).animate({ bottom: getRandomInt(100)}, 1500)
        }
    }
}