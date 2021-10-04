{
    const OnChanegeBackgroundClick = () => {
        body.classList.toggle("dark");
        const body = document.querySelector(".body");
        if (body.classList.contains("dark")) {
            main__changeColor.innerText = "jasny";
        } else {
            main__changeColor.innerText = "ciemny";
        }

        // main__changeColor.innerText = body.classList.contains("dark") ? "jasny" : "ciemny" ;
    };

    const init = () => {
        const main__button = document.querySelector(".main__button");
        const main__changeColor = document.querySelector(".main__changeColor")
        // const dark = document.querySelector(".dark");
        main__button.addEventListener("click", OnChanegeBackgroundClick);
    };

}