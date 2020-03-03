const btn = document.querySelectorAll("strong");

function test() {
btn.forEach(v => {
    const content = v.nextElementSibling;
    function clickFunction() {
        if (content.classList.contains("none")) {
            content.classList.remove("none");
        } else {
            content.classList.add("none");
        }
        }
        v.addEventListener("click", clickFunction);
    });
}
test();