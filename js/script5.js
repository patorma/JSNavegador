const input = document.getElementById("input");

// input.addEventListener("keyup", (e) => {
//     console.log(e.key);
//     console.log(e);
//     console.log(e.ctrlKey);
//     console.log(e.altKey);
// });

//si queremos capturar el evento en todo el window

// addEventListener("keydown", (e) => {
//     if (e.key === "a" && e.ctrlKey === true) {
//         e.preventDefault();
//         alert("CTRL A");
//     }
// });
//se le suma con estos valores para mover la bolita
let x = 0,
    y = 0;
addEventListener("keyup", (e) => {
    const ball = document.getElementById("ball");

    //calcula la posicion de la bolita
    const move = (direction) => {
        switch (direction) {
            case "up":
                --y;
                break;
            case "down":
                y++;
                break;
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
            default:
                break;
        }

        ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
    };

    // const down = () => (ball.style.transform = "translateY(10%)");
    // const left = () => (ball.style.transform = "translateX(-10%)");
    // const right = () => (ball.style.transform = "translateY(10%)");
    switch (e.key) {
        case "ArrowUp":
            move("up");
            break;
        case "ArrowDown":
            move("down");
            break;

        case "ArrowLeft":
            move("left");
            break;
        case "ArrowRight":
            move("right");
            break;
        default:
            break;
    }
});