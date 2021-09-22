# What is it about "homepage2"

## **Moje zaintereosowania**
- Trekkig górski
- Czytanie książek
- Piłka nożna
- Gotowanie
- Trening siłowy
- Gry video
- Oglądanie seriali
## **Lista ulubionych seriali**
1. Gra o Tron
2. Breaking Bad
3. Dark
4. Stranger Things
5. Wikingowie
6. House of cards
7. Narcos

![Radek](https://radekols.github.io/homepage2/img/Radek.jpg)

## **Mechanizm działania**

```javascript
let main__button = document.querySelector(".main__button");
let body = document.querySelector(".body");
let main__changeColor = document.querySelector(".main__changeColor")


main__button.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        main__changeColor.innerText = "jasny";
    } else {
        main__changeColor.innerText = "ciemny";
    }

});


if (body.classList.contains("dark")) {
    main__changeColor.innerText = "jasny";
} else {
    main__changeColor.innerText = "ciemny";
}
```
[Link do strony](https://radekols.github.io/homepage2/)
