function display_image(src,width, height, alt) {
    let divImg = document.querySelector('#displayWallpaper')
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    divImg.appendChild(img);
}

function showRandomNumber(min, max){
    let res = 0;
    res = Math.floor((Math.random()*(max-min))+min)
    if(res===0 || res>8){
        console.log("Error");
    }
    return res;
}

function reload(){
    location.reload();
}