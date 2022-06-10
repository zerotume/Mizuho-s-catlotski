export const panelArray = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,1,1,0]
];

export default function game(){

    let modules = document.querySelectorAll("div.modules");
    console.log(modules);
    function MouseOnModules(event){
        let pointing = event.currentTarget;
        let childImg = pointing.children[0];
        pointing.style.backgroundColor="rgb(120,120,120)";
        childImg.style.opacity = "0.7";
    }

    function MouseLeaveModules(event){
        let pointing = event.currentTarget;
        let childImg = pointing.children[0];
        pointing.style.backgroundColor=null;
        childImg.style.opacity = "1";
    }

    let mouseMoveFunc;
    let chosenModule;
    let offsetX;
    let offsetY;
    let pointing;

    function DragStartModules(event){
        pointing = event.currentTarget;
        const rect = pointing.getBoundingClientRect();


        offsetX = event.clientX - rect.x;
        offsetY = event.clientY - rect.y;

        // const startX = event.clientX;
        // const startY = event.clientY;
        // chosenModule = pointing.cloneNode(true);
        // chosenModule.style.position = "absolute";
        // chosenModule.style.top = `${pointing.offsetTop}px`;
        // chosenModule.style.left = `${pointing.offsetLeft}px`
        // chosenModule.children[0].style.opacity = "0.5";
        // chosenModule.id = "added-module";
        // document.body.appendChild(chosenModule);

        // function MouseMoveModules(event){
        //     const mouseX = event.clientX;
        //     const mouseY = event.clientY;
        //     const changeX = mouseX - startX;
        //     const changeY = mouseY - startY;
        //     console.log(chosenModule.style.left);

        //     chosenModule.style.left = `${chosenModule.offsetLeft + changeX}px`;
        //     chosenModule.style.top = `${chosenModule.offsetTop + changeY}px`;
        // }
        // mouseMoveFunc = MouseMoveModules;
        // document.addEventListener("mousemove", MouseMoveModules, false);
    }

    function DropStartModules(event){
        event.preventDefault();
        let newOne = pointing.cloneNode(true);
        newOne.style.position = "absolute";
        //console.log(window.pageXOffset, window.pageYOffset);
        newOne.style.left = event.clientX + window.pageXOffset - offsetX + "px";
        newOne.style.top = event.clientY + window.pageYOffset - offsetY + "px";
        document.body.appendChild(newOne);
    }

    function DragOverOn(event){
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    modules.forEach(ele => {
        ele.addEventListener("mouseover", MouseOnModules, false);
        ele.addEventListener("mouseleave", MouseLeaveModules, false);
        ele.addEventListener("mousedown", DragStartModules, false);
    });

    document.addEventListener("drop", DropStartModules, false);
    document.addEventListener("dragover", DragOverOn, false);



}
