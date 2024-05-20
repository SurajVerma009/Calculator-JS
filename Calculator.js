let input = document.getElementById("input")

let output = document.getElementById("output")

let buttons = document.querySelectorAll(".button")


let str = ""
buttons.forEach((button) => {

    button.addEventListener("click", function (e) {
        buttons.forEach(btn => {
            btn.style.border = "none";
        });

        e.target.style.border = "2px solid red";
        
        if (e.target.id == "clear") {
            str = ""
            input.innerHTML = 0
            output.innerHTML = 0
            e.style.border = "none"
        } else if (e.target.id == "clearEnd") {
            str = str.substring(0, str.length - 1)
            input.innerHTML = str
            if (str.length == 0) {
                input.innerHTML = 0
            }
        }
        else if (e.target.id == "equal") {
            str = eval(str)
            output.innerHTML = str
        }
        else {
            str = str + e.target.innerHTML
            input.innerHTML = str
        }
    })
})