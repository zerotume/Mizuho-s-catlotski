window.onload = () => {

    let gamepan = document.getElementById('game-panel');
    const cover = document.createElement("div");
    cover.style.position = "absolute";
    let rect = gamepan.getBoundingClientRect();
    cover.style.top = `${gamepan.offsetTop}px`;
    cover.style.left = `${gamepan.offsetLeft}px`;
    cover.style.width = `${gamepan.offsetWidth}px`;
    cover.style.height = `${gamepan.offsetHeight}px`;
    cover.style.display = "grid";
    cover.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    cover.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
    cover.style.backgroundColor = "transparent";
    cover.style.zIndex = "2";
    cover.style.pointerEvents = "none";
    //const squares = [];
    for(let i = 1; i <= 5; i++){
        for(let j = 1; j <= 4; j++){
            let square = document.createElement("div");
            square.id = `square-${i}-${j}`;
            square.class = "cover-squares";
            square.style.gridRow = `${i}/${i+1}`;
            square.style.gridColumn = `${j}/${j+1}`;
            square.style.backgroundColor = "transparent";
            square.style.pointerEvents = "none";
            if(i === 5 && j === 2)square.style.borderBottom = "2px solid rgba(47, 114, 92, 0.5)";
            if(i === 5 && j === 3)square.style.borderBottom = "2px solid rgba(47, 114, 92, 0.5)";
            cover.append(square);
        }
    }

    document.body.append(cover);

}
