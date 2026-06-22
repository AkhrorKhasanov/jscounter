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

        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "#333";

        value.textContent = count;
    });
});