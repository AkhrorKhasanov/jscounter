let count = 0;

const value = document.getElementById("count");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.id;
        
        if (style === "decrease") {
            count--;
        } else if (style === "increase") {
            count++;
        } else {
            count = 0;
        }

        // I need to change button colors here...

        value.textContent = count;
    });
});