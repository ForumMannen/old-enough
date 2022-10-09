const form = document.querySelector("form");

function pushButton() {
    const input = document.getElementById("age-test");
    let message;
    if (input.value < 18) {
        message = "Get dry behind your ears!";
    } else if (input.value < 65) {
        message = "Ok, I'll let you in!";
    } else {
        message = "Is there someone leading you?";
    }
    document.getElementById("result").innerText = message;
}