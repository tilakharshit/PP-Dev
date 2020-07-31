// alert("Hello");
// console.log(ctx);
let flag = false;
let initalX =
    board.addEventListener("mousedown", function (e) {
        flag = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        // console.log(`mousedown ${e.clientX} ${e.clientY}`);
    })

board.addEventListener("mousemove", function (e) {
    if (flag) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        // console.log(`mousemove ${e.clientX} ${e.clientY}`);
    }
})

board.addEventListener("mouseup", function (e) {
    flag = false;
    // console.log(`mouseup ${e.clientX} ${e.clientY}`);
})