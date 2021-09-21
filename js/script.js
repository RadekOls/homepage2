let main__button = document.querySelector(".main__button");
let body = document.querySelector(".body");
let main__changeColor = document.querySelector(".main__changeColor")
// let dark = document.querySelector(".dark");


main__button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        main__changeColor.innerText = "jasny";
    } else {
        main__changeColor.innerText = "ciemny";
    }
    // main__changeColor.innerText = body.classList.contains("dark") ? "jasny" : "ciemny" ;

});



// color.innerText = body.classList.contains("section__changeColor") ? "jasny" : "ciemny" ;

if (body.classList.contains("dark")) {
    main__changeColor.innerText = "jasny";
} else {
    main__changeColor.innerText = "ciemny";
}