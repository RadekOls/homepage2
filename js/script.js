{
const main__button = document.querySelector(".main__button");
const body = document.querySelector(".body");
const main__changeColor = document.querySelector(".main__changeColor")
// let dark = document.querySelector(".dark");


const OnChanegeBackgroundClick = () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        main__changeColor.innerText = "jasny";
    } else {
        main__changeColor.innerText = "ciemny";
    }

// main__changeColor.innerText = body.classList.contains("dark") ? "jasny" : "ciemny" ;
};

main__button.addEventListener("click", OnChanegeBackgroundClick);

}

